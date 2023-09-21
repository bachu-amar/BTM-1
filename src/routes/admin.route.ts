import { Router } from "express";
import { createAdmin, getallstudents } from "@/controllers/admin.controller";
 
const router = Router();


router.post('/admin',createAdmin)

router.get('/all', getallstudents)

 

export default router;
