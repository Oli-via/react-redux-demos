/**
 * Created by aliyy on 2017/1/23.
 */
export default function ({ dispatch }) {
  return next => action => {
    // if the action does not have payload, or the payload does not have a .then property
    // we don't care about it, send it on
    if(!action.payload || !action.payload.then){
      return next(action)
    }

  //  Make sure the action's promise resolves
    action.payload.then(response => {
      // create a new action with the old type, but
      // replace the promise with the response data
      const newAction = {...action, payload: response.data}
      dispatch(newAction)
      // next(action) just goes to the next middleware,
    //   dispatch means run the entire cycle over again.
    //  go up to the very top and may in run this action through everything again
    })

  }
}
/*
以上代码相当于：
export default function ({ dispatch }) {
  return function (next){
    return function (action) {
      console.log(action);
      next(action);
    }
  }
}*/
