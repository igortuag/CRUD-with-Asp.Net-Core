import api from "./api"


export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DEÇETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispach => {
    api.dCandidate().fetchAll()
        .then(
            Response => {
                dispach({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: Response.data
                })
            }
        )
        .catch(err => console.log(err))
}