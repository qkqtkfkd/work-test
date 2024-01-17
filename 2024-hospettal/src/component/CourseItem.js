import Card from "./Card";
import Tags from "./Tags";
import styles from "./CourseItem.module.css";
// import getCourseColor from "../utils/getCourseColor";
import { Link } from "react-router-dom";

const DIFFICULTY = ["전국평균가", "최고가", "최저가"];

function CourseItem({ course }) {
  
  const difficulty = DIFFICULTY[course.difficulty || 0];
  // const courseColor = getCourseColor(course.code);
  // const thumbStyle = {
  //   borderColor: courseColor,
  // };

  return (
    <Card className={styles.courseItem}>
      <div className={styles.content}>

        <h2 className={styles.title}>
          <Link to={`/courses/${course.slug}`} state={{ course }}>
            {course.title}
          </Link>
        </h2>

        <div>
          <Tags values={[course.language, difficulty]} />
        </div>

      </div>
    </Card>
  );
}

export default CourseItem;
