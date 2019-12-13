import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Conditions() {
  return (
    <div className="row fixed-center">
      <div className="col-lg-4">
        <h2 style={{marginLeft: '20px'}}>Дано:</h2>
        <p style={{marginLeft: '20px'}}>Количество вершин - n</p>
        <p style={{marginLeft: '20px'}}>Набор троек вида "a b c", означающих, что ребро a-b имеет в графе вес c.</p>
      </div>
      <div className="col-lg-4">
        <h2 style={{marginLeft: '20px'}}>Найти:</h2>
        <p style={{marginLeft: '20px'}}>Кратчайший путь, проходящий через все все вершины графа, притом ровно по одному разу.</p>
      </div>
      <div className="col-lg-4">
        <h2 style={{marginLeft: '20px'}}>Решение:</h2>
        <p style={{marginLeft: '20px'}}>С помощью различных эвристик находится приближённое решение задачи и дается ответ в виде последовательности вершин графа, которые следует посещать.</p>
      </div>
    </div>
  );
}

export default Conditions