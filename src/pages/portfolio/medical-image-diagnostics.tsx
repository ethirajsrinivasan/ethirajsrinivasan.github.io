import PortfolioShell from '@/components/portfolio/shell'
import { pc, externalLink } from '@/components/portfolio/classes'

export default function MedicalImageDiagnosticsPage() {
  return (
    <PortfolioShell
      slug="medical-image-diagnostics"
      title="Development Of Deep Learning Models For Medical Image Diagnostics"
      category="Machine Learning"
      description="Deep learning models for automated medical image analysis and diagnostics"
      image="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1920&q=85&auto=format&fit=crop"
      date="2018"
      technologies={['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy']}
      links={[
        { href: 'https://github.com/ethirajsrinivasan/mammogram_deep_learning', label: 'Source code on GitHub' },
      ]}
    >
      <section className={pc.section}>
        <h2 className={pc.heading}>Summary</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            With the deep learning techniques, medical diagnostics could be totally revolutionized. The project
            aims to develop a deep learning model for reporting mammograms. The project aimes to
          </p>
          <ul>
            <li>To develop a diagnostic capability with medical images on mammogram screening</li>
            <li>
              Identification of computer vision techniques that can preprocess Radiological images (X Ray,
              Ultrasound, MRI, CT)
            </li>
            <li>Development of deep learning techniques that can identify lesions suspicious of malignancy</li>
            <li>Development of mammogram screening as a proof of concept</li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Data Source</h2>
        <div className={pc.body}>
          <p className={pc.justify}>Mammogram images are obtained from the following sources</p>
          <ul>
            <li>
              <a href="http://www.mammoimage.org/databases/" className={pc.link} {...externalLink}>
                MIAS
              </a>
            </li>
            <li>
              <a
                href="http://marathon.csee.usf.edu/Mammography/Database.html"
                className={pc.link}
                {...externalLink}
              >
                DDSM
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Pre Processing</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            In order to remove the noise from the image the biggest contour(largest blob) is found from the
            image. Mask of the biggest contour is used to clean the images.
          </p>
          <div className={pc.grid2}>
            <div className={pc.figure}>
              <img
                src="/assets/images/before_preprocess.png"
                alt="Mammogram before preprocessing"
                className={pc.img}
              />
              <p className={pc.caption}>Original Image</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/contour_detection.png"
                alt="Contour detection on mammogram"
                className={pc.img}
              />
              <p className={pc.caption}>Contours</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/largest_contour.png"
                alt="Largest contour selected"
                className={pc.img}
              />
              <p className={pc.caption}>Largest Contour</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/after_preprocess.png"
                alt="Mammogram after preprocessing"
                className={pc.img}
              />
              <p className={pc.caption}>Proprocessed Image</p>
            </div>
          </div>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Experimental Setup</h2>
        <div className={pc.body}>
          <p className={pc.justify}>
            From the two publicly available datasets three more datasets are formed by combining the images in
            both the datasets (ALL), images with only CC views (CC) from DDSM datasets and images with only MLO
            views from the DDSM and MIAS datasets (MLO). These three newly formed datasets along with the two
            publicly available datasets form the five basic raw image datasets. These five raw image datasets
            are then semi-processed and completely processed to generate five semi-processed datasets and five
            completely processed datasets respectively. These 15 datasets from raw, semi-processed and completely
            processed datasets are then used in two class and three class classification models on VGG16 and
            ResNet34. Categorial Cross Entropy is chosen as the loss function and Adam optimizer is picked. Keras
            is used with Theano as the backend in an Ubuntu 16.04 Operating System with 32 GB RAM, 2 GTX 1080 Ti.
            Only one GPU was used for training the models. The last layer of the CNN networks were finetuned by
            replacing the thousand class output with a two class output for two class classification of normal vs
            abnormal and with a three class outputs for three class classification of normal vs benign vs
            malignant. The data is split into training(60%), test(20%) and validation(20%) set and classification
            is done for each image.
          </p>
        </div>
      </section>

      <section className={pc.section}>
        <h2 className={pc.heading}>Results</h2>
        <div className={pc.body}>
          <div className={pc.grid2}>
            <div className={pc.figure}>
              <img
                src="/assets/images/two_class_mammogram.png"
                alt="Two class classification results"
                className={pc.img}
              />
              <p className={pc.caption}>Two class Classification</p>
            </div>
            <div className={pc.figure}>
              <img
                src="/assets/images/three_class_mammogram.png"
                alt="Three class classification results"
                className={pc.img}
              />
              <p className={pc.caption}>Three class Classification</p>
            </div>
          </div>
        </div>
      </section>
    </PortfolioShell>
  )
}
