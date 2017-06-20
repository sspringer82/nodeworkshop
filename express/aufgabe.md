1. neue Route definieren: get /hello/:name - req.params.name

2. ejs als template engine einbinden
  npm install ejs
  app.set('view engine', 'ejs')

3. rendern des templates (/views/hello.ejs) res.render('hello', {name: name})


<%= name %>