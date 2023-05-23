import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as commonActions from "store/common/common.action"
import * as authenticationActions from "store/authentication/authentication.action"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ ...commonActions, ...authenticationActions }, dispatch)
}
