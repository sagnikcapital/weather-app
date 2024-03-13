import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function ContactUs() {
  return (
    <>
      <section class="section">
        <div class="container">
          <h1 class="title">fabform.io bulma form</h1>
          <div class="columns">
            <div class="column is-half">
              <form action="https://fabform.io/f/{insert-your-form-id}" method="post">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input classNames="input" type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Your Message"></textarea>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">Submit</button>
                    <p>Powered by <a href="https://fabform.io" target="_blank">fabform.io</a></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;