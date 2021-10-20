import skckonlonpi from "../images/skckolonpi.png";
import petFilm from "../images/PetFilm.png";
import thinFilm from "../images/ThinFilm.png";
import pvdfFilm from "../images/PvdfFilm.png";
import siliconFilm from "../images/SiliconFilm.png";
import adhesive from "../images/adhesive.png";
import hardCoatingFilm from "../images/HardCoatingFilm.png";

const filmItem = [
  {
    no: 0,
    name: "skpi",
    image: skckonlonpi,
    subTitle: "SKCKOLON 필름",
    prop: [
      "최고의 내한성 : -270℃",
      "최고의 내열성 : 400℃",
      "공급가능 최저두께 : 7.5㎛",
      "공급가능 최고두께 : 75㎛",
    ],
    area: [
      "FPCB 기재",
      "FPCB Coverlay 필름",
      "COF(Chip on Film) 기재",
      "고온에 소각후 방열시트로 사용",
      "Drive IC",
    ],

    subDetail: [
      "PI 필름은 상용화된 플라스틱필름 중에 내열성과",
      <br />,
      "내한성이 가장 우수하며, SKCKOLONPI 필름의 PI필름은 사",
      <br />,
      "용가능온도가 -270℃~400℃로 매우 넓어서,",
      <br />,
      "다양하고 특수한 분야에 폭 넓게 사용되고 있습니다.",
    ],
  },
  {
    no: 1,
    name: "pet",
    image: petFilm,
    subTitle: "PET 필름",
    prop: [
      "In-line Coating 제품:이접착,이형,대전방지,베리어,Slip",
      "Color제품:Black,White,Blue,Window용 원착필름",
      "고기능성 제품:열수축,반사,저올리고머,생분해,열성형,Twist,Fancylite",
    ],
    area: ["광학용", "산업용", "포장용", "일반용", "기타 특수 PET 필름"],
    subDetail: [
      "태을필름은 SKC PET 필름에 대한 기술적인 지식을",
      <br />,
      "바탕으로 고객의 용도에 최고로 적합한 제품을 안내하고 있습니다.",
    ],
  },

  {
    no: 2,
    name: "thin",
    image: thinFilm,
    subTitle: "박막 필름",
    prop: [
      "세계최저두께:25㎛",
      "우수한 광학특성",
      "(투명 및 반투명)",
      "뛰어난인쇄성",
    ],
    area: [
      "FCCL",
      "ID Card",
      "Insulation",
      "Graphic Printing",
      "IML(In-mold Lamination)",
    ],
    subDetail: [
      "세계에서 가장 얇은 PC(Polycarbonate)",
      <br />,
      "필름으로써 양산 최저 두께가",
      <br />,
      "25㎛으로 전기전자, 디스플레이,",
      <br />,
      "그래픽 프린팅 용도에 사용되는 고투명 내열 필름입니다.",
    ],
  },
  {
    no: 3,
    name: "pvdf",
    image: pvdfFilm,
    subTitle: "PVDF 필름",
    prop: [
      "고내후성",
      "내화학성",
      "UV Resistant",
      "Stain Resistent",
      "열합지성",
    ],
    area: [
      "태양광 모듈 Back Sheet",
      "Membrane Structue/Tents",
      "Construction Interior",
      "Air/Train Craft Interioi",
      "Green House",
      "Window Materials",
      "Billboard",
    ],
    subDetail: [
      "SKC가 신제품으로 개발한",
      <br />,
      "PVDF(Polyvinylidene Difluoride)",
      <br />,
      "필름으로 각종 내후성 용도에 적용되는 필름입니다.",
    ],
  },
  {
    no: 4,
    name: "silicon",
    image: siliconFilm,
    subTitle: "실리콘 필름",
    prop: [
      "Base Film에 실리콘 접착성이 우수",
      "전명에 균일한 박리강도 구현 우수한 내용제성,내열성 및 투명성 구현",
      "광범위한 박리강도 구현가능 단면,양면,저전사 Type구현가능",
    ],
    area: [
      "점착필름의 Liner수지 Casting용",
      "의약품 Patch Liner",
      "박막필름 Castingdyd 전사용",
    ],
    subDetail: [
      "PET나 PI 필름표면에 이형성이 우수한 실리콘",
      <br />,
      "코팅을 하고 경화를 시킨 필름으로 실리콘 성분과",
      <br />,
      "코팅두께,경화도 조정을 통해 박리강도를",
      <br />,
      "조절하고 있으며, 최저 1g/inch부터 최대 500g/inch의",
      <br />,
      "넓은 범위의 박리강도를 구현할 수 있습니다.",
    ],
  },
  {
    no: 5,
    name: "adhesive",
    image: adhesive,
    subTitle: "점착 필름",
    prop: [
      "다양한 점착력",
      "균일한 도포",
      "고내열성",
      "점착제 잔류물질 최소화",
    ],
    area: ["보호필름", "각종 테이프", "마스킹 필름"],
    subDetail: [
      "PET나 PI 필름 위에 아크릴계, 우레탄계, 혹은 실리콘계",
      <br />,
      "점착수지를 코팅하여 고객의 요구에 맞는 다양한 점착력을",
      <br />,
      "구현한 필름입니다.",
    ],
  },
  {
    no: 6,
    name: "hard",
    image: hardCoatingFilm,
    subTitle: "하드코팅 필름",
    prop: [
      "고경도 표면 구현",
      "LR,AR,AG등 다양한 종류의 표면특성 부여가능",
      "Low Rainbow 높은 투명성",
    ],
    area: ["각종 디스플레이 표면보호", "Window 표면보호", "공정용 보호필름"],
    subDetail: [
      "PET 필름표면손상을 방지하기 위해 PET 필름표면에 UV 경화형",
      <br />,
      "수지를 코팅하고 UV로 완전히 경화시켜 표면도막의 경도를 올린 필름으로",
      <br />,
      "디스플레이용도나 공정용 표면보호필름올 사용됩니다",
    ],
  },
];

export default filmItem;
