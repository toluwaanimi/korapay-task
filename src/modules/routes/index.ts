import express, {Router} from 'express';
import {authRoutes} from "./auth.routes";
import {questionRoutes} from "./question.routes";
import {answerRoutes} from "./answer.routes";
import {commentRoutes} from "./comment.routes";
import {voteRoutes} from "./vote.routes";
import {subscriptionRoutes} from "./subscription.routes";

const router = express.Router();
router.use('/auth', authRoutes)
router.use('/question', questionRoutes)
router.use('/answer', answerRoutes)
router.use('/comment', commentRoutes)
router.use('/vote', voteRoutes)
router.use('/subscribe', subscriptionRoutes)
export const routerBase: Router = router;