// action type
const GET_SELECT = "selectMovie/GET_SELECT";



// create action creation function
export const setSelect = (id) => ({
    type: GET_SELECT,
    id: id
})

// initial value
const isGenre = 
   [
        {id: 1, genrelist:"entire", genrechange: "entire", isDone: false},
        {id: 2, genrelist:"action",genrechange: "action", isDone: false},
        {id: 3, genrelist:"horror/horror", genrechange: "horror/horror포", isDone: false},
        {id: 4, genrelist:"animated movie", genrechange: "animated movie", isDone: false},
        {id: 5, genrelist:"thriller/mystery", genrechange: "thriller/mystery", isDone: false},
        {id: 6, genrelist:"adventure", genrechange: "adventure", isDone: false},
        {id: 7, genrelist:"fantasy", genrechange: "fantasy", isDone: false},
        {id: 8, genrelist:"superhero", genrechange: "superhero", isDone: false},
        {id: 9, genrelist:"SF", genrechange: "SF", isDone: false},
        {id: 10, genrelist:"music", genrechange: "music", isDone: false},
        {id: 11, genrelist:"period drama", genrechange: "period drama", isDone: false},
        {id: 12, genrelist:"mellow", genrechange: "mellow", isDone: false},
        {id: 13, genrelist:"drama", genrechange: "drama", isDone: false},
        {id: 14, genrelist:"family", genrechange: "family", isDone: false},
        {id: 15, genrelist:"sports", genrechange: "sports", isDone: false},
        {id: 16, genrelist:"comedy", genrechange: "comedy", isDone: false},
        {id: 17, genrelist:"crime", genrechange: "crime", isDone: false},
        {id: 18, genrelist:"military", genrechange: "military", isDone: false},
        {id: 19, genrelist:"calamity", genrechange: "calamity", isDone: false}
    ]



//create reducer
export default function movieSelect(state=isGenre, action) {
    switch(action.type){
        // when getting one
        case GET_SELECT:
            return state.map(gen=>gen.id === action.id ? {
                    ...gen,
                    isDone: !gen.isDone
                }: gen.id !== action.id && gen.isDone === true ? {
                    ...gen,
                    isDone: !gen.isDone 
                }: gen)      
        default:
            return state;    
    }
}