import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Description() {
  return (
    <div class="pricing-header px-3 py-3 pt-md-0 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Задача коммивояжёра</h1>
      <p class="lead">Одна из самых известных задач комбинаторной оптимизации, заключающаяся в поиске самого выгодного маршрута, 
        проходящего через указанные города хотя бы по одному разу с последующим возвратом в исходный город.
         Как правило, указывается, что маршрут должен проходить через каждый город только один раз — в таком случае выбор
          осуществляется среди гамильтоновых циклов.</p>
    </div>
  );
}

export default Description