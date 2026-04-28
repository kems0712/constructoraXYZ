import {
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaHardHat,
  FaShieldAlt,
  FaClock,
  FaBullseye,
  FaHandshake,
} from 'react-icons/fa';

const values = [
  {
    icon: FaShieldAlt,
    title: 'Seguridad',
    description: 'Priorizamos la seguridad en cada etapa del proyecto, cumpliendo con todas las normativas vigentes.',
  },
  {
    icon: FaAward,
    title: 'Calidad',
    description: 'Utilizamos materiales de primera y técnicas constructivas que garantizan durabilidad y excelencia.',
  },
  {
    icon: FaClock,
    title: 'Puntualidad',
    description: 'Cumplimos con los plazos establecidos, respetando cronogramas y presupuestos acordados.',
  },
  {
    icon: FaHandshake,
    title: 'Compromiso',
    description: 'Nos involucramos en cada proyecto como si fuera propio, con dedicación y responsabilidad total.',
  },
];

const stats = [
  { number: '200+', label: 'Proyectos Completados', icon: FaBullseye },
  { number: '15+', label: 'Años de Experiencia', icon: FaClock },
  { number: '50+', label: 'Profesionales', icon: FaUsers },
  { number: '98%', label: 'Clientes Satisfechos', icon: FaAward },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-secondary-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">
            Conócenos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Sobre <span className="text-primary-400">Nosotros</span>
          </h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            Más de 15 años construyendo con pasión, calidad y compromiso
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Equipo de construcción profesional"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 bg-primary-500 rounded-2xl p-6 shadow-xl text-white">
                <FaHardHat className="text-3xl mb-2" />
                <p className="text-3xl font-bold">2009</p>
                <p className="text-primary-100 text-sm">Año de fundación</p>
              </div>
            </div>

            <div>
              <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">
                Nuestra Historia
              </span>
              <h2 className="heading-primary mt-3 mb-6">
                Una trayectoria de{' '}
                <span className="text-primary-500">éxito</span> y crecimiento
              </h2>
              <div className="space-y-4 text-body">
                <p>
                  Desde nuestra fundación en 2009, Constructora XYZ se ha
                  posicionado como una de las empresas líderes en el sector de
                  la construcción. Lo que comenzó como un pequeño equipo de
                  profesionales apasionados, hoy es una compañía con más de 50
                  colaboradores y presencia en múltiples regiones.
                </p>
                <p>
                  Hemos ejecutado más de 200 proyectos exitosos, desde
                  residencias unifamiliares hasta complejos comerciales e
                  industriales. Nuestro compromiso con la calidad, seguridad y
                  cumplimiento nos ha ganado la confianza de clientes
                  corporativos, institucionales y particulares.
                </p>
                <p>
                  Creemos que construir es más que levantar estructuras: es
                  transformar sueños en realidad y crear espacios que mejoran
                  la calidad de vida de las personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="text-center text-white">
                  <IconComponent className="text-3xl mx-auto mb-3 text-primary-100" />
                  <p className="text-4xl md:text-5xl font-bold mb-1">
                    {stat.number}
                  </p>
                  <p className="text-primary-100 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">
              Nuestros Valores
            </span>
            <h2 className="heading-primary mt-3 mb-4">
              Los pilares que nos{' '}
              <span className="text-primary-500">definen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="text-primary-500 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-900 rounded-2xl p-8 md:p-10 text-white">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-5">
                <FaBullseye className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-secondary-300 leading-relaxed">
                Desarrollar proyectos de construcción de alta calidad que
                superen las expectativas de nuestros clientes, utilizando
                tecnologías innovadoras y prácticas sostenibles, con un equipo
                humano comprometido con la excelencia y la seguridad.
              </p>
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-10 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                <FaCheckCircle className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-primary-100 leading-relaxed">
                Ser reconocidos como la constructora líder de la región,
                referente en innovación, calidad y cumplimiento, contribuyendo
                al desarrollo de infraestructura que transforme positivamente
                las comunidades donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
