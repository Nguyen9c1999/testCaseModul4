import routerr from "express";
import {categoryRouter} from "./categoryRouter";
import {productRouter} from "./productRouter";
import {imageProductRouter} from "./imageProductRouter";

export const router = routerr()
router.use('/categories',categoryRouter)
router.use('/products',productRouter)
router.use('/imageProducts',imageProductRouter)