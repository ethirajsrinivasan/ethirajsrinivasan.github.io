import type { BlogPost } from '@/types/blog'
import BlogShell from '@/components/blog/shell'
import MarkdownBody from '@/components/blog/MarkdownBody'

const post: BlogPost = {
  slug: "how-to-generate-kubernetes-deploy-manifests-for-rails-application-in-simple-steps",
  title: "Generation of Kubernetes Deploy Manifests For a Rails Application",
  date: "Apr 04, 2023",
  image: "https://images.unsplash.com/photo-1667372459510-55b5e2087cd0",
  excerpt:
    'A very simple and easy way to generate kubernetes deployment manifests for a rails application is through the Helm chart. Helm is simply a package manager for Kubernetes. Helm Chart is a collection of kubernetes resource files like deployments, services and ingress rules also the values that is used to configure these resources.',
  readTime: '5 min read',
  content: `![](https://user-images.githubusercontent.com/7569031/229564025-15d0e5d4-2d15-406e-ba81-4867a917751f.png)

Follow the steps below to generate the deploy manifest files:

- Install Helm on your local

\`\`\`bash
# MacOS
brew install helm
# Linux
sudo apt-get install helm
\`\`\`

Create Helm chart for rails application using \`helm create [name]\` in your application home folder:

\`\`\`bash
helm create deploy
\`\`\`

Edit the \`values.yaml\` file in the chart directory with the desired configuration for the deployment. Configurations can be image name, tag, database connection settings etc. You can also create \`values-[ENV].yaml\` for environment specific files where ENV can be \`test\`, \`staging\`, \`dev\` or \`uat\`.

The templates directory containes the Kubernetes deployment manifests files with \`.yml\` or \`.yaml\` extensions. These files use the Go language syntax for the resource like deployments, services or ingress rules. \`{{ .Values }}\` object can be used to access the values in the \`values.yaml\` file.

Run \`helm install\` to deploy the rails application to Kubernetes cluster:

\`\`\`bash
helm install my-release mychart --kube-context=my-context
\`\`\`

where \`my-release\` is the name of the release, \`mychart\` is the name of the chart to deploy and \`my-context\` is the name of the kubernetes context to use.

Below is the directory structure of a Helm chart in this case deploy for a rails application:

\`\`\`text
deploy/
  Chart.yaml
  values.yaml
  templates/
    deployment.yaml
    service.yaml
    ingress.yaml
\`\`\`

The \`deployment.yaml\` file defines the kubernetes resources using the Go template language. It specifies the name of the **container**, **image**, **tag**, **ports**, **environment variables** etc. Example of the file is shown below:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Values.appName }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ .Values.appName }}
  template:
    metadata:
      labels:
        app: {{ .Values.appName }}
    spec:
      containers:
        - name: {{ .Values.appName }}
          image: {{ .Values.image.repository }}:{{ .Values.image.tag }}
          ports:
            - containerPort: {{ .Values.containerPort }}
          env:
            - name: DATABASE_URL
              value: {{ .Values.databaseUrl }}
            # Add any other environment variables here
\`\`\`

The \`service.yaml\` file defines the kubernetes services details to expose the rails application to the outer network. The service file contains information like the **apiVersion**, **kind** of resource eg Service, **metadata** like name, labels, annotations and **spec** describing the desired state of the service. Example of the file is shown below:

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ .Values.appName }}
spec:
  selector:
    app: {{ .Values.appName }}
  ports:
    - name: http
      port: {{ .Values.servicePort }}
      targetPort: {{ .Values.containerPort }}
  type: {{ .Values.serviceType }}
\`\`\`

The \`ingress.yaml\` file defines the ingress resource to route traffic to the application based on the host header. Example of the file is shown below:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {{ .Values.appName }}
spec:
  rules:
    - host: {{ .Values.hostname }}
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: {{ .Values.appName }}
                port:
                  name: http
\`\`\`

Thanks to Helm for providing an awesome package manager for Kubernetes. It made life easier`,
}

export default function HowToGenerateKubernetesDeployManifestsForRailsApplicationInSimpleStepsPage() {
  return (
    <BlogShell
      slug={post.slug}
      title={post.title}
      excerpt={post.excerpt}
      image={post.image}
    >
      <MarkdownBody content={post.content} />
    </BlogShell>
  )
}
