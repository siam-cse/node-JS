const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/hello', function(req, res){
    res.send("Hello Hello World!");
 });
 app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });
app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

 app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });
 
//  5-digit long number
app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });
 //invalid path
 app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });
 

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})