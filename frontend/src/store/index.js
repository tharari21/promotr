import { legacy_createStore as createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "user":
            return
        default:
            return state
    }
}
const store = createStore(reducer, {user: null})
export default store