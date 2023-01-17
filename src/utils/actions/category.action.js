import { createAction } from "../reducer/reducer.utils.js";
import CATEGORIES_ACTION_TYPE from "../constants/category.constants.js";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
