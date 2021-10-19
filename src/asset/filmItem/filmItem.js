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
  },
  {
    no: 1,
    name: "pet",
    image: petFilm,
  },
  {
    no: 2,
    name: "thin",
    image: thinFilm,
  },
  {
    no: 3,
    name: "pvdf",
    image: pvdfFilm,
  },
  {
    no: 4,
    name: "silicon",
    image: siliconFilm,
  },
  {
    no: 5,
    name: "adhesive",
    image: adhesive,
  },
  {
    no: 6,
    name: "hard",
    image: hardCoatingFilm,
  },
];

export default filmItem;
