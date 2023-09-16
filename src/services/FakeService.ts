import { faker } from "@faker-js/faker";
import { FakeRespModel } from "../models/FakeModel";

export default function getData(search: string): Promise<FakeRespModel[]> {
  const getImage = () => faker.image.urlLoremFlickr({ category: search });
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = () => faker.animal[search]?.();
  if (!getTitle())
    return new Promise(function (resolve) {
      setTimeout(resolve, 1000, []);
    });
  const data = [...new Array(100)].map((item, index) => {
    return {
      type: search,
      id: index + 1,
      url: getUrl(),
      title: getTitle(),
      description: getText(),
      image: getImage(),
    };
  });
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000, data);
  });
}
