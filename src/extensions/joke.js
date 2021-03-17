(async function(message) {
    let {body} = await(superagent.get("https://official-joke-api.appspot.com/jokes/random"));
    message.send(body.setup +"\n\n"+body.punchline);
})