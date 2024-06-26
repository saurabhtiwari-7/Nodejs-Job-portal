import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { createJobController, deleteJobController, getAllJobsController, jobStatsController, updateJobController } from '../controllers/jobController.js';

const router = express.Router()

//routes
//CREATE JOB || POST
router.post('/create-job', userAuth, createJobController)

// GET JOBS || GET
router.get('/get-job', userAuth, getAllJobsController )

// Update JOBS || PATCH
router.patch('/update-job/:id', userAuth, updateJobController)

// Delete jobs || DELETE || 
router.delete('/delete-job/:id', userAuth, deleteJobController)

// Jobs stats filter || GET

router.get("/job-stats", userAuth, jobStatsController)

export default router