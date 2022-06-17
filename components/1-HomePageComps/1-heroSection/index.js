import Image from "next/image"
import Link from "next/link"
import HeroImage from "../../../assets/images/home-hero-photo.jpg"
import styles from "../1-heroSection/heroSection.module.scss"
import Container from "../../../ui/container/Container"

const HeroSection = () => {
  return (
    <>
      <section className={styles.hero}>
        {/* Cover Hero Image */}
        <div className={styles.heroImg}>
          <Image
            src={HeroImage}
            alt='a bridge in nature'
            layout='fill'
            objectFit='cover'
          />
        </div>
        {/* Content */}
        <Container>
          <div className={styles.content}>
            <p className={styles.firstP}>A travel for the</p>
            <h1 className={styles.heading}>Curious & Adventurous</h1>
            <p>
              Choose{" "}
              <span>
                <Link href='/'>Travel Topics Here </Link>
              </span>
              to start your journey
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default HeroSection
