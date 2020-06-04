<html>
 <head>
 <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
<script>
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
model.fit(xs, ys, {epochs: 10}).then(() => {
  model.predict(tf.tensor2d([5], [1, 1])).print();
});
   </script>
 </head>
  
  <body>
   <h2> EN: Open console and check result </h2>
   <h2> TR: Konsolu aç ve sonucu gör :) </h2>
  </body>
  
</html>
