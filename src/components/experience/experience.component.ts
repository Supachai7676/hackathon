import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

type TLangListAll = {
  EN_name: string;
  TH_name: string;
  value: string;
  flag: string;
  va: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  TH_EN_flag: TLangListAll[] = [
    { EN_name: 'English', TH_name: 'อังกฤษ', value: 'en', flag: 'en.jpg', va: ['Ava', 'Shawn']},
    { EN_name: 'Thai', TH_name: 'ไทย', value: 'th', flag: 'th.jpg', va: ['Ava', 'Shawn']},
    { EN_name: 'Japanese', TH_name: 'ญี่ปุ่น', value: 'ja', flag: 'ja.jpg', va: ['Ava', 'Shawn']},
    { EN_name: 'Vietnamese', TH_name: 'เวียดนาม', value: 'vi', flag: 'vi.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Laos', TH_name: 'ลาว', value: 'lo', flag: 'lo.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Chinese', TH_name: 'จีน', value: 'zh', flag: 'zh.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Korean', TH_name: 'เกาหลี', value: 'ko', flag: 'ko.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Burmese', TH_name: 'เมียนมาร์', value: 'my', flag: 'my.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Cambodia', TH_name: 'กัมพูชา', value: 'km', flag: 'km.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Filipino', TH_name: 'ฟิลิปปินส์', value: 'fil', flag: 'fil.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Indonesian', TH_name: 'อินโดนีเซีย', value: 'id', flag: 'id.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Spanish', TH_name: 'สเปน', value: 'es', flag: 'es.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Arabic', TH_name: 'อาหรับ', value: 'ar', flag: 'ar.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'Dutch', TH_name: 'ดัตช์', value: 'nl', flag: 'nl.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'German', TH_name: 'เยอรมัน', value: 'de', flag: 'de.jpg', va: ['Ava', 'Shawn'] },
    { EN_name: 'French', TH_name: 'ฝรั่งเศส', value: 'fr', flag: 'fr.jpg', va: ['Ava', 'Shawn'] },
  ];
}
