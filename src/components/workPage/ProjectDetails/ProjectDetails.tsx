import styles from "./ProjectDetails.module.css";
import Button from "@/components/shared/Button/Button";
import { StaticImageData } from "next/image";
import VideoSection from "../VideoSection/VideoSection";
// import Stats from "../Stats/Stats";
// import Corner from "@/components/shared/Corner/Corner";

interface TagItem {
  id: number;
  tag: string;
}

interface ChallengeItem {
  id: number;
  challengeDetail: string;
}

interface ResultItem {
  id: number;
  resultDetail: string;
}

interface GalleryItem {
  id: number;
  src: StaticImageData;
}

interface StatItem {
  id: number;
  title: string;
  desc: string;
}

interface Props {
  project: {
    title: string;
    slug: string;
    src: StaticImageData;
    video?: string;
    description?: string;
    tags?: readonly TagItem[];
    h1: string;
    year: number;
    platform: string;
    tech: string;
    href: string;
    challenge: readonly ChallengeItem[];
    results: readonly ResultItem[];
    gallery?: readonly GalleryItem[];
    stats?: readonly StatItem[];
  };
}

export default function ProjectDetails({ project }: Props) {
  // const Icon = project.icon;

  return (
    // <LayoutWrapper>
    <section className={styles.container} id={project.slug}>
      {/* <div className={styles.cornerContainer}>
        <Corner backgroundColor='backgroundColorTan' />
      </div> */}
      <div className={styles.top}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.introSection}>
          {/* <div className={styles.isLeft}>
            <div className={styles.isLeftTop}>
              <div className={styles.isl1}>
                <div>
                  <span className={styles.sectionTitle}>Client</span>
                  <p className={styles.copy}>{project.title}</p>
                </div>
                <div>
                  <span className={styles.sectionTitle}>Year</span>
                  <p className={styles.copy}>{project.year}</p>
                </div>
              </div>
              <div className={styles.isl2}>
                <div>
                  <span className={styles.sectionTitle}>CMS/Platform</span>
                  <p className={styles.copy}>{project.platform}</p>
                </div>
                <div>
                  <span className={styles.sectionTitle}>Tech</span>
                  <p className={styles.copy}>{project.tech}</p>
                </div>
              </div>
            </div>
            <div className={styles.isLeftBottom}>
              <div className={styles.btnContainer}>
                <Button
                  href={project.href}
                  btnType='noBackgroundBlueText'
                  text='Visit Website'
                  target='_blank'
                  arrow
                />
              </div>
            </div>
          </div> */}
          <p className={styles.heading}>{project.description}</p>
          <div className={styles.tagContainer}>
            {project.tags?.map((x) => (
              <span className={styles.tag} key={x.id}>
                {x.tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* {project.stats && project.stats.length > 0 && (
        <Stats stats={project.stats} />
        )} */}
      {project.video && <VideoSection video={project.video} />}
      <div className={styles.btnContainer}>
        <Button
          href={project.href}
          btnType='black'
          text='Visit Website'
          target='_blank'
          arrow
        />
      </div>
    </section>
  );
}
