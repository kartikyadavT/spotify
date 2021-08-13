import { findAllByDisplayValue } from "@testing-library/dom";
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
   
    item: null,
 //token: "BQBglcaNC6w69YwS3MajtPJASG5CW0hrExQ-xVMsK9v4Dly3lTj0Iv5eqL8DY1BGsijCkA6GXeCXXfwjySN5zkt2LGAq5WjVkP88eBnSlVwo9mvB9YegjWtCl3XZnPWYMtULq03hqTR3JM8I0-nBV4Nb5ernaPbLv1GJqCtLdUjdDEdA",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };

            case 'SET_TOKEN':
                return{
                    ...state,
                token: action.token
                };

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists,
                }  ;  
                case 'SET_DISCOVER_WEEKLY':
                    return{
                        ...state,
                        discover_weekly: action.discover_weekly,
                    };

          
              case "SET_TOP_ARTISTS":
                  return {
                      ...state,
                      top_artists: action.top_artists,
                  }; 

                 
            default:
                return state;
    }
};

    export default reducer;
