import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ChangeStateEventEmitterService {
  emitter = new EventEmitter();


  constructor() {
    setTimeout(() => {
      this.emitter.emit({
          passport: {
            page1: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page2: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page3: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page4: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page6: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page7: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page8: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            },
            page9: {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            }
          },
          underfloor: [
            {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png",
              state: "processing"
            },
            {
              href: "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png",
              state: "error"
            }
          ]
        }
      )
    }, 1000);
  }
}

