export  const actionConsoleLog =(store)=>(next)=>(action)=>{
   console.log(`custom middleware say action ${action.type} executed`);
  next(action)
}
