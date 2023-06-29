import { Processor, Process } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Buyer } from './user.entity';
import { TRANSCODE } from '../Queues';
import { sendEmail } from '../Utils/sendEmail';

@Processor(TRANSCODE)
export class UserConsumer {
  @Process('addUser')
  async transcode(job: Job<{ user: Buyer }>) {
    const { user } = job.data;
    await sendEmail(user.email, 'Welcome To Our Platform');
  }
}

// @Processor(TRANSCODE)
// export class UserConsumer  {
//   constructor(
//     @InjectRepository(Buyer) private readonly userRepository: Repository<Buyer>,
//   ) {
//   }
//   @Process()
//   async transcode(job: Job<{ user: Buyer }>): Promise<Buyer> {
//     const { user } = job.data;
//     return await this.userRepository.save(user);
//   }
//   @OnWorkerEvent('completed')
//   onCompleted() {
//     console.log('used Added');
//   }
// }
