import huffman from "./assets/projectsImg/huffman.jpg";
import realestate from "./assets/projectsImg/real-estate.jpg";
import notesflow from "./assets/projectsImg/notesflow.jpg";
import drum from "./assets/projectsImg/drum.jpg";
import openai from "./assets/projectsImg/openai.jpg";
import linkshub from "./assets/projectsImg/linkshub.jpg";
import projectshut from "./assets/projectsImg/projectshut.jpg";
import resourcegal from "./assets/projectsImg/resourcegal.jpg";
import freehit from "./assets/projectsImg/freehit.jpg";
import codeforces from "./assets/projectsImg/codeforces.jpg";
import leetcode from "./assets/projectsImg/leetcode.jpg";
import codechef from "./assets/projectsImg/codechef.jpg";
import hackerrank from "./assets/projectsImg/hackerrank.jpg";
import gameindia from "./assets/projectsImg/gameindia.png";

const images = {
  huffman,
  realestate,
  notesflow,
  drum,
  openai,
  linkshub,
  projectshut,
  resourcegal,
  freehit,
  codeforces,
  leetcode,
  codechef,
  hackerrank,
  gameindia,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
