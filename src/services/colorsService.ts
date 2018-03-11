import ApiPaths from '../utils/apiPaths';
import ApiUtils from '../utils/apiUtils';

export default class ColorsService {
  static fetchColors = async () => {
    return await ApiUtils.get(ApiPaths.colors);
  }
}