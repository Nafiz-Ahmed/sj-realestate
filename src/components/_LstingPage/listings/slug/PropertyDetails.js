import Container from "@/layout/Container";
import React from "react";
import styles from "./propertyDetails.module.css";
import Image from "next/image";
import Button from "@/layout/buttons/Button";
import * as Links from "@/utils/Links";
import { Checkmark } from "@/utils/OtherIcons";

function PropertyDetails({ property }) {
  const amenities = [];

  for (let i = 1; i <= 5; i++) {
    amenities.push(
      <div className={styles.amenity} key={i}>
        <Checkmark size={24} />
        {property[`Amenities 0${i}`]}
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.propertyDetails}>
            <div className={styles.type}>{property.Type}</div>
            <div className={styles.name}>{property.Name}</div>
            <div className={styles.kbh}>
              <div>{property.Bedroom} Bedrooms</div>
              <div>{property.Bathrooms} Bathroom</div>
              <div>{property["Size (sq.ft)"]} sq.ft</div>
            </div>
            <div className={styles.price}>${property.Price}</div>
          </div>

          <div className={styles.coverImage}>
            <Image src={property["Cover Image"].url} fill alt={property.Name} />
          </div>

          <div className={styles.propertyDescription}>
            <p>{property.Description}</p>
            <Button text="Book Now" link={Links.contactMe.googleMeet} />
            <div className={styles.address}>{property.Address}</div>
          </div>

          <div className={styles.propertyStructures}>
            <div className={styles.infos}>
              <div className={styles.info}>
                <div>Size</div>
                <div>{property["Size (sq.ft)"]} sq.ft</div>
              </div>

              <div className={styles.info}>
                <div>Built Year</div>
                <div>{property["Built year"]}</div>
              </div>

              <div className={styles.info}>
                <div>Floor Plan</div>
                <div>{property.Floors}</div>
              </div>

              <div className={styles.info}>
                <div>Bedrooms</div>
                <div>{property.Bedroom}</div>
              </div>

              <div className={styles.info}>
                <div>Bathrooms</div>
                <div>{property.Bathrooms}</div>
              </div>

              <div className={styles.info}>
                <div>Parking Lots</div>
                <div>{property["Parking lots"]}</div>
              </div>
            </div>

            <div className={styles.floorPlanDesign}>
              <Image
                src={property["Floor Plan"].url}
                fill
                alt={property.Name}
              />
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={`${styles.galleryImage} ${styles.imageLarge}`}>
              <Image src={property["Image 01"].url} fill alt={property.Name} />
            </div>

            <div className={styles.galleryImage}>
              <Image src={property["Image 02"].url} fill alt={property.Name} />
            </div>

            <div className={styles.galleryImage}>
              <Image src={property["Image 03"].url} fill alt={property.Name} />
            </div>
          </div>

          <div className={styles.amenities}>
            <div className={styles.amenitiesHeading}>Amenities Included:</div>
            <div className={styles.amenitiesList}>{amenities}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PropertyDetails;
