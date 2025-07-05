"use client";

import React from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.formContainer}>
      <form
        action={"https://formsubmit.co/nafizbd2001@gmail.com"}
        method="POST"
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.input}
            placeholder="Jane Smith"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            placeholder="jane@frame.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            rows={4}
            placeholder="What would you like to ask?"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
