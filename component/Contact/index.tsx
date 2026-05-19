import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Style from './contact.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Expertise from '../Why_octagram/One/one';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

const CONTACT_INFO = [
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'harunorrashid@gmail.com',
    href: 'mailto:harunorrashid@gmail.com',
  },
  {
    icon: 'fa-solid fa-phone-volume',
    label: 'Phone',
    value: '+8801717311750',
    href: 'tel:+8801717311750',
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Location',
    value: 'Mohammadpur, Dhaka',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_wpnqlsg',
        'template_27bkvxe',
        formData,
        'OB7CXWdJSzwKt9lD0'
      );
      setStatus('sent');
      setFormData(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <>
      <Navbar />
      <section className={Style.contact}>
        <div className="container-wide">
          <div className={Style.head}>
            <span className={Style.eyebrow}>Contact</span>
            <h1 className={Style.title}>
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className={Style.lead}>
              Have a project in mind, or just want to say hello? Drop a
              message and I&apos;ll get back as soon as possible.
            </p>
          </div>

          <div className={Style.grid}>
            <motion.form
              className={Style.form}
              onSubmit={handleSubmit}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
            >
              <div className={Style.row}>
                <div className={Style.field}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={Style.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={Style.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's it about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={Style.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={Style.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && (
                  <>
                    Message sent <i className="fa-solid fa-check" />
                  </>
                )}
                {status === 'error' && 'Failed — try again'}
                {status === 'idle' && (
                  <>
                    Send message <i className="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>
            </motion.form>

            <motion.aside
              className={Style.info}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.16, 1, 0.3, 1],
                duration: 0.7,
                delay: 0.15,
              }}
            >
              <h2 className={Style.infoTitle}>Reach out directly</h2>
              <ul className={Style.infoList}>
                {CONTACT_INFO.map((item) => {
                  const content = (
                    <>
                      <span className={Style.infoIcon}>
                        <i className={item.icon} />
                      </span>
                      <span className={Style.infoText}>
                        <span className={Style.infoLabel}>{item.label}</span>
                        <span className={Style.infoValue}>{item.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={Style.infoItem}
                          target={item.href.startsWith('mailto') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className={Style.infoItem}>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>
      <Expertise />
      <Footer />
    </>
  );
};

export default Contact;
