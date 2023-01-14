import { listApi } from '../../service/api'

export const loadProduct = payload => async dispatch => {
  const res = await listApi(payload);
  dispatch({
    type: "PRODUCT_LOADED",
    payload: res
  })
}