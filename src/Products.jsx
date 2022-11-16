/*
  무한루프에 빠진 fetch를 한 번만 불러옴
  useEffect() hooks은 react component를 원할 때만 실행하기 한다.
*/

import React, { useEffect, useState } from "react";

export default function Products() {
	const [count, setCount] = useState(0);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("data/products.json")
			.then((res) => res.json()) //json함수 호출(=불러온 문서가 json이야)
			.then((data) => {
				console.log("데이터를 네트워크에서 받아왔음");
				setProducts(data);
			});
		return () => {
			//컴퍼넌트가 언마운트 될 때
			console.log("깨끗하게 청소해요");
		};
	}, []); //deps를 비워 놓으면 아무런 디팬던시가 전달되지 않음. (=처음에만 실행됨)

	return (
		<>
			<ul>
				{products.map((product) => (
					<li>
						<h3>제품명 : {product.name}</h3>
						<p>가격 : {product.price}</p>
					</li>
				))}
			</ul>
			<button
				style={{ padding: "10px", backgroundColor: "yellow" }}
				onClick={() => setCount((prev) => prev + 1)}
			>
				{count}
			</button>
		</>
	);
}

/*
  fetch ('API 주소')          //API(외부에서 제공하는 데이터/함수)
  .then(res => res.json())
  .then(res => {})            //data를 응답 받은 후의 로직
*/
