import PortfolioShell from "@/components/portfolio/shell";
import { pc } from '@/components/portfolio/classes'

export default function FacialRecognitionSystemPage() {
  return (
    <PortfolioShell
      slug="facial-recognition-system"
      title="Relay Activation Using Facial Recognition System"
      category="Machine Learning"
      description="IoT-based facial recognition system for automated relay control"
      image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=85&auto=format&fit=crop"
      date="2022"
      technologies={["Python", "Django", "Flask", "face_recognition", "PostgreSQL", "Raspberry Pi", "GPIO"]}
      links={[
        { href: 'https://github.com/ethirajsrinivasan/relay_activation_face_recognition_system', label: 'Source code on GitHub' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
            <p className={pc.justify}>
              The application activates a GPIO relay on a Raspberry Pi when an enrolled user is
              recognized. Django provides the web UI on the Pi: users upload a photo from the
              camera (or file), and the image is forwarded to a Flask service that runs{' '}
              <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
                face_recognition
              </code>{' '}
              (dlib encodings) with known faces stored in PostgreSQL. Authorized matches can drive
              the relay via{' '}
              <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
                relay.py
              </code>
              .
            </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Architecture</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            The repo splits edge control (
            <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              django_front_end
            </code>
            ) from recognition (
            <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              face_web_app
            </code>
            ). Django posts multipart images to Flask on{' '}
            <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              localhost:5000
            </code>{' '}
            for enrollment (
            <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">/add</code>
            ) and identification (
            <code className="text-primary-600 bg-slate-100 px-1.5 py-0.5 rounded text-sm">
              /recognize
            </code>
            ).
          </p>
          <div className={pc.figure}>
            <img
              src="/assets/images/facial_recognition_architecture.svg"
              alt="Architecture diagram: Django on Raspberry Pi, Flask face recognition service, PostgreSQL, and GPIO relay"
              className={pc.img}
            />
            <p className={pc.caption}>
              Components and enroll / recognize / relay flows from the GitHub source
            </p>
          </div>
        </div>
      </section>
    </PortfolioShell>
  );
}
