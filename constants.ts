import { 
  Shield, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Home, 
  Coins,
  FileText,
  Users,
  Building2
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: '关于我们', id: 'about' },
  { label: '身份规划', id: 'identity' },
  { label: '核心服务', id: 'services' },
  { label: '为何选我们', id: 'why-us' },
  { label: '联系我们', id: 'contact' },
];

export const OFFICE_LOCATIONS = [
  {
    city: '深圳总部',
    address: '福田区卓越世纪中心4号楼18楼',
    image: 'https://picsum.photos/id/1031/400/300' // Office placeholder
  },
  {
    city: '香港办事处',
    address: '油尖旺区梳士巴利道星光行927C',
    image: 'https://picsum.photos/id/1048/400/300' // City placeholder
  },
  {
    city: '福建办事处',
    address: '福州市台江区万达中心5楼',
    image: 'https://picsum.photos/id/180/400/300' // Office interior placeholder
  }
];

export const IDENTITY_PATHS = [
  {
    title: '金融路',
    description: '隔离资产、保全财富、更好传承',
    icon: Coins
  },
  {
    title: '低税路',
    description: '在低税国家有一个身份，更好地保值增值',
    icon: FileText
  },
  {
    title: '高考路',
    description: '成为华侨生、国际生，同样的孩子不同的大学',
    icon: GraduationCap
  },
  {
    title: '出行路',
    description: '说走就走，不受签证限制，全世界自由进出',
    icon: Plane
  },
  {
    title: '定居路',
    description: '多一个高福利居住地，保障生活，应对时局变化',
    icon: Home
  }
];

export const MISCONCEPTIONS = [
  {
    id: 1,
    title: '居住要求',
    myth: '一旦移民就需要出国生活',
    reality: '有很多国家可以只拿身份，不居住。如：巴拿马、希腊、马耳他、土耳其等。'
  },
  {
    id: 2,
    title: '国籍问题',
    myth: '一旦移民就要放弃中国国籍',
    reality: '80%以上的“移民”是拿长居和永居（PR/绿卡），对中国国籍无影响。'
  },
  {
    id: 3,
    title: '办理时机',
    myth: '移民不难，等我有需要再办',
    reality: '未雨绸缪才是关键。办理需要时间（大国3年+，欧洲1年+），且政策随时变动。'
  },
  {
    id: 4,
    title: '成本问题',
    myth: '移民好贵，等我存够几百万',
    reality: '好的规划师能找到性价比最优解。如巴拿马购房5年回款，相当于“0元购”。'
  }
];

export const IDENTITY_TYPES = [
  {
    type: 'A',
    name: '签证 (Visa)',
    description: '中短期居留',
    features: [
      '仍是中国国籍',
      '随申请内容结束而结束',
      '子女可做华侨生(部分条件)'
    ],
    examples: ['香港', '英国', '新加坡', '日本工作签/学生签']
  },
  {
    type: 'B',
    name: '永居 (PR/Green Card)',
    description: '永久居留权',
    features: [
      '仍是中国国籍',
      '享有除政治外的公民权利',
      '子女属于华侨生(低分进985/211)'
    ],
    examples: ['香港', '美国', '加拿大', '希腊', '马耳他']
  },
  {
    type: 'C',
    name: '护照 (Citizenship)',
    description: '入籍公民',
    features: [
      '拥有其他国籍',
      '享有所有公民权利(含政治)',
      '子女属国际生(免笔试申请清北)'
    ],
    examples: ['土耳其', '加勒比海岛国', '欧盟护照']
  }
];

export const SERVICE_DOMESTIC = [
  '了解客户需求及家庭情况',
  '跨界合作，定制身份规划案',
  '签约，启动正式移民服务',
  '收集、整理、翻译、公证材料',
  '文案总监最终审核',
  '递交申请，直至获批'
];

export const SERVICE_OVERSEAS = [
  '跨国搬家、宠物移民',
  '落地接机、订酒店',
  '找房、租房、购房',
  '开通水电煤气、电话卡',
  '申请当地税号、银行开户',
  '注册家庭医生、购买保险',
  '考驾照、买车租车',
  '对接教育资源、申请学校'
];

export const SERVICE_CORPORATE = [
  '个人海外账户开设',
  'IAA/IDP国际驾照办理',
  '离岸公司注册 (HK/SG/BVI等)',
  '海外税务筹划、架构设计',
  '香港BUD专项基金申请 (最高700万)',
  '香港创业服务 (共享办公)',
  '对接海外销售渠道'
];

export const PARTNERS = [
  '银行', '律所', '商会', '留学', '保险'
];

export const COUNTRIES = [
  '加拿大', '美国', '巴拿马', '格林纳达', '圣基茨', 
  '爱尔兰', '英国', '葡萄牙', '西班牙', '希腊', 
  '马耳他', '土耳其', '迪拜', '泰国', '新加坡', 
  '马来西亚', '韩国', '日本', '澳大利亚', '新西兰'
];
