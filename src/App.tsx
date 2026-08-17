import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import './App.css'
import { supabase } from './lib/supabase'

type City = { id: string; name: string; drp: string }
type Course = { id: string; name: string; eixo: string }
type Colleague = {
  id: string; name: string; cityId: string; cityName: string; courseId: string; courseName: string
  eixo: string; drp: string; phone: string; semester?: number; active: boolean
}
type Message = { id: string; name: string; email: string; phone: string; message: string; createdAt: string }

const fallbackCities: City[] = [
  { id: 'pp', name: 'Presidente Prudente', drp: 'DRP13' },
  { id: 'pb', name: 'Presidente Bernardes', drp: 'DRP13' },
  { id: 'pirapozinho', name: 'Pirapozinho', drp: 'DRP13' },
  { id: 'marilia', name: 'Marília', drp: 'DRP07' },
  { id: 'ourinhos', name: 'Ourinhos', drp: 'DRP07' },
  { id: 'assis', name: 'Assis', drp: 'DRP07' },
  { id: 'aracatuba', name: 'Araçatuba', drp: 'DRP12' },
  { id: 'sao-paulo', name: 'São Paulo', drp: 'DRP14' },
]
const fallbackCourses: Course[] = [
  { id: 'letras', name: 'Letras', eixo: 'Licenciaturas' },
  { id: 'matematica', name: 'Matemática', eixo: 'Licenciaturas' },
  { id: 'pedagogia', name: 'Pedagogia', eixo: 'Licenciaturas' },
  { id: 'tecnologia-informacao', name: 'Tecnologia da Informação', eixo: 'Computação' },
  { id: 'dados', name: 'Ciência de Dados', eixo: 'Computação' },
  { id: 'ia', name: 'Inteligência Artificial', eixo: 'Computação' },
  { id: 'eng-computacao', name: 'Engenharia de Computação', eixo: 'Computação' },
  { id: 'processos-gerenciais', name: 'Processos Gerenciais', eixo: 'Negócios e Produção' },
  { id: 'administracao', name: 'Administração', eixo: 'Negócios e Produção' },
  { id: 'eng-producao', name: 'Engenharia de Produção', eixo: 'Negócios e Produção' },
]
const seed: Colleague[] = [
  { id: '1', name: 'Ana Souza', cityId: 'pp', cityName: 'Presidente Prudente', courseId: 'eng', courseName: 'Engenharia da Computação', eixo: 'Computação', drp: 'DRP13', phone: '(18) 99812-3456', semester: 6, active: true },
  { id: '2', name: 'Bruno Almeida', cityId: 'pp', cityName: 'Presidente Prudente', courseId: 'dados', courseName: 'Ciência de Dados', eixo: 'Computação', drp: 'DRP13', phone: '(18) 99111-2233', semester: 5, active: true },
  { id: '3', name: 'Carlos Mendes', cityId: 'pp', cityName: 'Presidente Prudente', courseId: 'eng', courseName: 'Engenharia da Computação', eixo: 'Computação', drp: 'DRP13', phone: '(18) 98765-4321', semester: 4, active: true },
  { id: '4', name: 'Daniela Lima', cityId: 'pb', cityName: 'Presidente Bernardes', courseId: 'eng', courseName: 'Engenharia da Computação', eixo: 'Computação', drp: 'DRP13', phone: '(18) 98444-5566', semester: 7, active: true },
  { id: '5', name: 'Eduardo Rocha', cityId: 'marilia', cityName: 'Marília', courseId: 'internet', courseName: 'Sistemas para Internet', eixo: 'Computação', drp: 'DRP07', phone: '', semester: 8, active: true },
  { id: '6', name: 'Fernanda Costa', cityId: 'ourinhos', cityName: 'Ourinhos', courseId: 'adm', courseName: 'Administração', eixo: 'Negócios', drp: 'DRP07', phone: '(14) 99654-7812', semester: 3, active: true },
]
const adminEmail = 'andrefguirro@gmail.com'
let cities: City[] = fallbackCities
let courses: Course[] = fallbackCourses
const norm = (value: string) => value.trim().toLocaleLowerCase('pt-BR')
const phoneDigits = (value: string) => value.replace(/\D/g, '')
const findCity = (value: string) => cities.find((item) => norm(item.name) === norm(value))
const findCourse = (value: string) => courses.find((item) => norm(item.name) === norm(value))

function App() {
  const [people, setPeople] = useState(seed)
  const [messages, setMessages] = useState<Message[]>([])
  const [contactOpen, setContactOpen] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [, refreshCatalog] = useState(0)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next))
    return () => data.subscription.unsubscribe()
  }, [])
  useEffect(() => {
    const loadCatalog = async () => {
      const [{ data: cityRows, error: cityError }, { data: courseRows, error: courseError }] = await Promise.all([
        supabase.from('cidades').select('id, nome, estado, drps(nome)').eq('status', 'ATIVO').order('nome'),
        supabase.from('cursos').select('id, nome, eixos(nome)').eq('status', 'ATIVO').order('nome'),
      ])

      if (!cityError && cityRows?.length) {
        cities = cityRows.map((row: any) => ({
          id: row.id,
          name: row.nome,
          state: row.estado,
          drp: row.drps?.nome ?? '',
        }))
      }

      if (!courseError && courseRows?.length) {
        courses = courseRows.map((row: any) => ({
          id: row.id,
          name: row.nome,
          eixo: row.eixos?.nome ?? '',
        }))
      }

      refreshCatalog((value) => value + 1)
    }

    void loadCatalog()
  }, [])
  const isAdmin = norm(session?.user?.email ?? '') === adminEmail

  useEffect(() => {
    const loadPeople = async () => {
      const { data, error } = await supabase.from('colegas').select('id, nome, telefone, cidade_id, curso_id, semestre, status, cidades(nome, drps(nome)), cursos(nome, eixos(nome))').eq('status', 'ATIVO').order('nome')
      if (error) return
      setPeople((data ?? []).map((row: any) => ({
        id: row.id,
        name: row.nome,
        phone: row.telefone ?? '',
        cityId: row.cidade_id ?? '',
        cityName: row.cidades?.nome ?? '',
        courseId: row.curso_id ?? '',
        courseName: row.cursos?.nome ?? '',
        eixo: row.cursos?.eixos?.nome ?? '',
        drp: row.cidades?.drps?.nome ?? '',
        semester: row.semestre ?? undefined,
        active: row.status === 'ATIVO',
      })))
    }

    void loadPeople()
  }, [])

  useEffect(() => {
    if (!isAdmin) return
    const loadMessages = async () => {
      const { data } = await supabase.from('mensagens_contato').select('id, nome, email, telefone, mensagem, created_at').order('created_at', { ascending: false })
      setMessages((data ?? []).map((row: any) => ({ id: row.id, name: row.nome, email: row.email, phone: row.telefone ?? '', message: row.mensagem, createdAt: row.created_at })))
    }

    void loadMessages()
  }, [isAdmin])

  const sendContactMessage = async (message: Omit<Message, 'id' | 'createdAt'>) => {
    const { data, error } = await supabase.from('mensagens_contato').insert({ nome: message.name, email: message.email, telefone: message.phone || null, mensagem: message.message }).select('id, created_at').single()
    if (error) {
      window.alert('Não foi possível enviar a mensagem. Tente novamente.')
      return
    }
    setMessages((items) => [{ ...message, id: data.id, createdAt: data.created_at }, ...items])
    setContactOpen(false)
  }
  return <BrowserRouter>
    <div className="app-shell">
      <header className="topbar"><div className="container topbar-inner">
        <Link to="/" className="brand"><span className="brand-mark">C</span><span>ConectaDRP</span></Link>
        <nav className="topbar-nav"><NavLink to="/" end>Início</NavLink><NavLink to="/cadastro">Cadastro</NavLink><button className="nav-contact-button" onClick={() => setContactOpen(true)}>Fale conosco</button><NavLink to="/admin" className="admin-lock-link">🔒</NavLink></nav>
      </div></header>
      <main className="page-container"><Routes>
        <Route path="/" element={<Home people={people} />} />
        <Route path="/cadastro" element={<Register people={people} setPeople={setPeople} />} />
        <Route path="/pesquisa" element={<Results people={people} />} />
        <Route path="/admin" element={isAdmin ? <Admin people={people} setPeople={setPeople} messages={messages} /> : <AdminLogin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes></main>
      <footer className="app-footer"><div className="container footer-inner"><span>ConectaDRP</span><span>Versão 1.0</span></div></footer>
    </div>
    {contactOpen && <Contact onClose={() => setContactOpen(false)} onSend={sendContactMessage} />}
  </BrowserRouter>
}

function Home({ people }: { people: Colleague[] }) {
  const navigate = useNavigate(); const [city, setCity] = useState(''); const [course, setCourse] = useState(''); const [error, setError] = useState(''); const [editOpen, setEditOpen] = useState(false)
  const cityOptions = useMemo(() => cities.filter((item) => !city || norm(item.name).includes(norm(city))), [city])
  const courseOptions = useMemo(() => courses.filter((item) => !course || norm(item.name).includes(norm(course))), [course])
  const submit = (event: React.FormEvent) => {
    event.preventDefault(); const selectedCity = findCity(city); const selectedCourse = findCourse(course)
    if (!city.trim() && !course.trim()) return setError('Informe uma cidade ou um curso.')
    if (city.trim() && !selectedCity) return setError('Cidade não cadastrada.')
    if (course.trim() && !selectedCourse) return setError('Curso não cadastrado.')
    navigate(`/pesquisa?cidadeId=${selectedCity?.id ?? ''}&cursoId=${selectedCourse?.id ?? ''}`)
  }
  return <><section className="hero-page"><div className="container hero-card"><div className="hero-content"><p className="eyebrow">Conectando colegas da UNIVESP</p><h1>ConectaDRP</h1><p className="subtitle">O ensino é a distância. O estudo pode ser bem perto de você.</p><form onSubmit={submit} className="search-form"><Field label="Cidade"><input value={city} onChange={(event) => setCity(event.target.value)} list="home-cities" placeholder="Digite sua cidade" /> <datalist id="home-cities">{cityOptions.map((item) => <option key={item.id} value={item.name} />)}</datalist></Field><Field label="Curso"><input value={course} onChange={(event) => setCourse(event.target.value)} list="home-courses" placeholder="Digite seu curso" /><datalist id="home-courses">{courseOptions.map((item) => <option key={item.id} value={item.name} />)}</datalist></Field>{error && <small className="error-text">{error}</small>}<button className="primary-button full-width">Encontrar Colegas</button></form><div className="separator" /><div className="inline-actions-row"><Link to="/cadastro" className="secondary-button">Cadastrar meus Dados</Link><button type="button" className="secondary-button" onClick={() => setEditOpen(true)}>Editar cadastro</button></div></div></div></section>{editOpen && <EditAccessModal people={people} onClose={() => setEditOpen(false)} onVerified={(person) => { setEditOpen(false); navigate('/cadastro', { state: { verifiedPerson: person } }) }} />}</>
}

function EditAccessModal({ people, onClose, onVerified }: { people: Colleague[]; onClose: () => void; onVerified: (person: Colleague) => void }) {
  const [phone, setPhone] = useState(''); const [code, setCode] = useState(''); const [sentCode, setSentCode] = useState(''); const [error, setError] = useState('')
  const sendCode = () => { const found = people.find((item) => phoneDigits(item.phone) === phoneDigits(phone) && item.active); if (!found) return setError('Nenhum cadastro encontrado para este telefone.'); const generated = String(Math.floor(1000 + Math.random() * 9000)); setSentCode(generated); setError(`Código SMS enviado. No ambiente local, use: ${generated}`) }
  const verify = () => { const found = people.find((item) => phoneDigits(item.phone) === phoneDigits(phone) && item.active); if (!found || code !== sentCode) return setError('Código inválido.'); onVerified(found) }
  return <div className="modal-backdrop"><div className="modal-card form-card"><div className="modal-header"><h3>Editar cadastro</h3><button type="button" className="close-button" onClick={onClose}>✕</button></div><p>Informe apenas o telefone usado no cadastro.</p><Field label="Telefone cadastrado"><input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="(18) 99999-9999" /></Field><div className="modal-actions"><button type="button" className="primary-button" onClick={sendCode}>Enviar SMS</button><button type="button" className="secondary-button" onClick={onClose}>Cancelar</button></div>{sentCode && <div className="field-wrap"><label htmlFor="edit-code">Código enviado</label><input id="edit-code" value={code} onChange={(event) => setCode(event.target.value)} placeholder="Digite o código" /><button type="button" className="primary-button" onClick={verify}>Validar código</button></div>}{error && <small className="error-text">{error}</small>}</div></div>
}

function Results({ people }: { people: Colleague[] }) {
  const [params] = useSearchParams(); const city = cities.find((item) => item.id === params.get('cidadeId')); const course = courses.find((item) => item.id === params.get('cursoId'))
  if (!city && !course) return <Navigate to="/" replace />
  const active = people.filter((item) => item.active); const cityMatch = (item: Colleague) => !!city && (item.cityId === city.id || item.cityName === city.name); const courseMatch = (item: Colleague) => !!course && (item.courseId === course.id || item.courseName === course.name); const eixoMatch = (item: Colleague) => !!course && item.eixo === course.eixo; const drpMatch = (item: Colleague) => !!city && item.drp === city.drp
  let groups: [string, Colleague[]][]
  if (city && course) groups = [['Mesma cidade e mesmo curso', active.filter((item) => cityMatch(item) && courseMatch(item))], ['Mesma cidade e mesmo eixo', active.filter((item) => cityMatch(item) && eixoMatch(item) && !courseMatch(item))], ['Mesmo DRP e mesmo curso', active.filter((item) => drpMatch(item) && courseMatch(item) && !cityMatch(item))], ['Mesmo DRP e mesmo eixo', active.filter((item) => drpMatch(item) && eixoMatch(item) && !cityMatch(item) && !courseMatch(item))]]
  else if (city) groups = [['Mesma cidade', active.filter(cityMatch)], ['Mesmo DRP', active.filter((item) => drpMatch(item) && !cityMatch(item))]]
  else groups = [['Mesmo curso', active.filter(courseMatch)], ['Mesmo eixo', active.filter((item) => eixoMatch(item) && !courseMatch(item))]]
  return <section className="results-page container"><div className="section-header"><div><p className="eyebrow">Resultados para sua busca</p><h2>{city?.name ?? 'Todos'} · {course?.name ?? 'Todos'}</h2></div><Link to="/cadastro" className="secondary-button">Cadastrar meus Dados</Link></div>{groups.map(([title, items]) => <div className="result-section" key={title}><div className="section-title-row"><h3>{title}</h3><span>{items.length} resultados</span></div>{items.length ? <div className="table-wrap"><table className="results-table"><thead><tr><th>Nome</th><th>Cidade</th><th>Curso</th><th>WhatsApp</th><th>Semestre</th></tr></thead><tbody>{items.map((item) => <tr key={item.id}><td>{item.name}</td><td>{item.cityName}</td><td>{item.courseName}</td><td>{item.phone ? <a className="icon-button" href={`https://wa.me/55${phoneDigits(item.phone)}`} target="_blank" rel="noreferrer">💬</a> : '—'}</td><td>{item.semester ? `${item.semester}º` : '—'}</td></tr>)}</tbody></table></div> : <div className="empty-state">Nenhum colega encontrado neste bloco.</div>}</div>)}</section>
}

function Register({ people, setPeople }: { people: Colleague[]; setPeople: React.Dispatch<React.SetStateAction<Colleague[]>> }) {
  const navigate = useNavigate(); const location = useLocation(); const [params] = useSearchParams(); const [form, setForm] = useState({ name: '', phone: '', city: '', course: '', semester: '' }); const [editing, setEditing] = useState<string | null>(null); const [message, setMessage] = useState(''); const [lookup, setLookup] = useState(''); const [code, setCode] = useState(''); const [sentCode, setSentCode] = useState('')
  useEffect(() => { if (params.get('editar') === '1') setMessage('Informe o telefone cadastrado para editar ou excluir.') }, [params])
  useEffect(() => { const verifiedPerson = (location.state as { verifiedPerson?: Colleague } | null)?.verifiedPerson; if (verifiedPerson) { setEditing(verifiedPerson.id); setForm({ name: verifiedPerson.name, phone: verifiedPerson.phone, city: verifiedPerson.cityName, course: verifiedPerson.courseName, semester: verifiedPerson.semester ? String(verifiedPerson.semester) : '' }); setMessage('Cadastro liberado para edição.'); window.history.replaceState({}, document.title, window.location.pathname) } }, [location.state])
  useEffect(() => {
    const pending = people.filter((person) => person.id.startsWith('local-'))
    pending.forEach((person) => {
      void supabase.from('colegas').insert({ nome: person.name, telefone: person.phone || null, cidade_id: person.cityId, curso_id: person.courseId, semestre: person.semester ?? null, status: 'ATIVO' }).select('id').single().then(({ data, error }) => {
        if (error || !data) return
        setPeople((current) => current.map((item) => item.id === person.id ? { ...item, id: data.id } : item))
      })
    })
  }, [people, setPeople])
  const update = (field: string, value: string) => setForm((current) => ({ ...current, [field]: value }))
  const sendCode = () => { const found = people.find((item) => phoneDigits(item.phone) === phoneDigits(lookup) && item.active); if (!found) return setMessage('Nenhum cadastro encontrado para este telefone.'); const generated = String(Math.floor(1000 + Math.random() * 9000)); setSentCode(generated); setMessage(`Código SMS enviado. No ambiente local, use: ${generated}`) }
  const verify = () => { const found = people.find((item) => phoneDigits(item.phone) === phoneDigits(lookup) && item.active); if (!found || code !== sentCode) return setMessage('Código inválido.'); setEditing(found.id); setForm({ name: found.name, phone: found.phone, city: found.cityName, course: found.courseName, semester: found.semester ? String(found.semester) : '' }); setMessage('Cadastro liberado para edição.') }
  const save = (event: React.FormEvent) => { event.preventDefault(); const city = findCity(form.city); const course = findCourse(form.course); if (!form.name.trim() || !city || !course) return setMessage('Informe nome, cidade e curso cadastrados.'); if (form.phone && phoneDigits(form.phone).length !== 11) return setMessage('Informe um telefone válido.'); const duplicate = people.find((item) => form.phone && phoneDigits(item.phone) === phoneDigits(form.phone) && item.id !== editing); if (duplicate) return setMessage('Este telefone já foi cadastrado. Use Editar cadastro.'); if (!window.confirm('Você concorda em deixar seus dados públicos neste site?')) return; const wasEditing = Boolean(editing); const data = { name: form.name.trim(), phone: form.phone, cityId: city.id, cityName: city.name, courseId: course.id, courseName: course.name, eixo: course.eixo, drp: city.drp, semester: form.semester ? Number(form.semester) : undefined, active: true }; setPeople((current) => editing ? current.map((item) => item.id === editing ? { ...item, ...data } : item) : [{ id: `local-${Date.now()}`, ...data }, ...current]); setMessage(wasEditing ? 'Cadastro atualizado com sucesso.' : 'Cadastro realizado com sucesso.'); setEditing(null); if (!wasEditing) window.setTimeout(() => navigate('/'), 1800) }
  const remove = () => { if (editing && window.confirm('Deseja excluir este cadastro?')) { setPeople((current) => current.filter((item) => item.id !== editing)); setEditing(null); setMessage('Cadastro excluído.'); setForm({ name: '', phone: '', city: '', course: '', semester: '' }) } }
  return <section className="container form-page"><div className="form-card"><p className="eyebrow">Cadastro de colega</p><h2>Cadastro</h2>{message && <div className="alert warning">{message}</div>}<form onSubmit={save} className="cadastro-form"><Field label="Nome"><input value={form.name} onChange={(event) => update('name', event.target.value)} /></Field><Field label="Telefone (opcional)"><input value={form.phone} onChange={(event) => update('phone', event.target.value)} /></Field><Field label="Cidade"><input value={form.city} onChange={(event) => update('city', event.target.value)} list="register-cities" /><datalist id="register-cities">{cities.map((item) => <option key={item.id} value={item.name} />)}</datalist></Field><Field label="Curso"><input value={form.course} onChange={(event) => update('course', event.target.value)} list="register-courses" /><datalist id="register-courses">{courses.map((item) => <option key={item.id} value={item.name} />)}</datalist></Field><Field label="Semestre (opcional)"><select value={form.semester} onChange={(event) => update('semester', event.target.value)}><option value="">Não informado</option>{Array.from({ length: 10 }, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}º</option>)}</select></Field><div className="form-actions"><button className="primary-button">Salvar Cadastro</button><button type="button" className="secondary-button" onClick={() => setMessage('Use a área de verificação abaixo.')}>Editar cadastro</button>{editing && <button type="button" className="danger-button" onClick={remove}>Excluir cadastro</button>}<button type="button" className="secondary-button" onClick={() => navigate('/')}>Voltar</button></div></form><div className="edit-access"><Field label="Telefone para editar/excluir"><input value={lookup} onChange={(event) => setLookup(event.target.value)} /></Field><div className="form-actions"><button type="button" className="secondary-button" onClick={sendCode}>Enviar código SMS</button>{sentCode && <><input value={code} onChange={(event) => setCode(event.target.value)} placeholder="Código" /><button type="button" className="primary-button" onClick={verify}>Validar código</button></>}</div></div></div></section>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div className="field-wrap"><label>{label}</label>{children}</div> }
function AdminLogin() { const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState(''); const login = async (event: React.FormEvent) => { event.preventDefault(); setError(''); const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password }); if (authError) { const errorMessage = authError.message.toLowerCase(); if (errorMessage.includes('email not confirmed')) setError('Confirme o e-mail do usuário no Supabase Auth antes de entrar.'); else if (errorMessage.includes('invalid login credentials')) setError('E-mail ou senha incorretos. Verifique se o usuário foi criado em Authentication > Users.'); else setError(authError.message) } }; return <section className="container login-page"><div className="login-card"><div className="lock-icon">🔒</div><h2>Área administrativa</h2><p>Faça login para acessar o painel.</p><form onSubmit={login} className="login-form"><Field label="E-mail"><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></Field><Field label="Senha"><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></Field>{error && <small className="error-text">{error}</small>}<button className="primary-button">Entrar</button></form></div></section> }
function Admin({ people, setPeople, messages }: { people: Colleague[]; setPeople: React.Dispatch<React.SetStateAction<Colleague[]>>; messages: Message[] }) {
  const [query, setQuery] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [draft, setDraft] = useState<Colleague | null>(null)
  const filteredPeople = people.filter((person) => [person.name, person.cityName, person.courseName, person.drp, person.phone, person.semester?.toString() ?? ''].some((value) => norm(value).includes(norm(query))))
  const orderedMessages = [...messages].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime())

  const startEdit = (person: Colleague) => {
    setEditingId(person.id)
    setDraft({ ...person })
  }

  const saveEdit = async () => {
    if (!draft) return
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(draft.id)) return window.alert('Este é um cadastro-modelo local. Recarregue a página após limpar os dados-modelo no banco.')
    const selectedCity = findCity(draft.cityName)
    const selectedCourse = findCourse(draft.courseName)
    if (!selectedCity || !selectedCourse) return window.alert('Cidade ou curso não encontrado no catálogo.')
    const { error } = await supabase.from('colegas').update({ nome: draft.name, telefone: draft.phone || null, cidade_id: selectedCity.id, curso_id: selectedCourse.id, semestre: draft.semester ?? null }).eq('id', draft.id)
    if (error) return window.alert(`Não foi possível salvar: ${error.message}`)
    setPeople((current) => current.map((person) => person.id === draft.id ? draft : person))
    setEditingId(null)
    setDraft(null)
  }

  const remove = (person: Colleague) => {
    if (!window.confirm(`Excluir o cadastro de ${person.name}?`)) return
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(person.id)) return window.alert('Este é um cadastro-modelo local. Recarregue a página após limpar os dados-modelo no banco.')
    void supabase.from('colegas').update({ status: 'INATIVO' }).eq('id', person.id).then(({ error }) => {
      if (error) return window.alert(`Não foi possível excluir: ${error.message}`)
      setPeople((current) => current.filter((item) => item.id !== person.id))
    })
  }

  const focusMessages = () => document.getElementById('admin-messages')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return <section className="container admin-page">
    <div className="section-header"><div><p className="eyebrow">Painel administrativo</p><h2>Dashboard</h2></div></div>
    <div className="stats-grid">
      <div className="stat-card"><span>Total de colegas</span><strong>{people.length}</strong></div>
      <div className="stat-card"><span>Cidades</span><strong>{cities.length}</strong></div>
      <div className="stat-card"><span>Cursos</span><strong>{courses.length}</strong></div>
      <button type="button" className="stat-card stat-card-button" onClick={focusMessages}><span>Mensagens</span><strong>{messages.length}</strong></button>
    </div>
    <div className="admin-search"><label htmlFor="admin-search-input">Pesquisar cadastros</label><input id="admin-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome, curso, cidade, DRP, telefone ou semestre" /></div>
    <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Nome</th><th>Telefone</th><th>Cidade</th><th>Curso</th><th>DRP</th><th>Semestre</th><th>Status</th><th>Ações</th></tr></thead><tbody>{filteredPeople.map((person) => <tr key={person.id}><td>{person.name}</td><td>{person.phone || '—'}</td><td>{person.cityName}</td><td>{person.courseName}</td><td>{person.drp}</td><td>{person.semester ? `${person.semester}º` : '—'}</td><td>{person.active ? 'ATIVO' : 'INATIVO'}</td><td><div className="crud-actions"><button type="button" className="primary-button compact-button" onClick={() => startEdit(person)}>CRUD</button><button type="button" className="danger-button compact-button" onClick={() => remove(person)}>Excluir</button></div></td></tr>)}</tbody></table>{filteredPeople.length === 0 && <div className="empty-state">Nenhum cadastro encontrado.</div>}</div>
    {editingId && draft ? <div className="admin-edit-panel"><h3>Editar cadastro administrativo</h3><div className="admin-edit-grid"><Field label="Nome"><input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} /></Field><Field label="Telefone"><input value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })} /></Field><Field label="Cidade"><input value={draft.cityName} onChange={(event) => setDraft({ ...draft, cityName: event.target.value })} /></Field><Field label="Curso"><input value={draft.courseName} onChange={(event) => setDraft({ ...draft, courseName: event.target.value })} /></Field><Field label="Semestre"><input type="number" min="1" max="10" value={draft.semester ?? ''} onChange={(event) => setDraft({ ...draft, semester: event.target.value ? Number(event.target.value) : undefined })} /></Field></div><div className="form-actions"><button type="button" className="primary-button" onClick={saveEdit}>Salvar alteração</button><button type="button" className="secondary-button" onClick={() => { setEditingId(null); setDraft(null) }}>Cancelar</button></div></div> : null}
    <div id="admin-messages" className="messages-panel"><h3>Mensagens recebidas</h3>{orderedMessages.length === 0 ? <div className="empty-state">Nenhuma mensagem recebida.</div> : orderedMessages.map((item) => <article className="message-card" key={item.id}><div className="message-header"><strong>{item.name}</strong><span>{item.id}</span></div><p>{item.message}</p><small>{item.email} · {item.phone || 'Telefone não informado'}</small></article>)}</div>
  </section>
}

function Contact({ onClose, onSend }: { onClose: () => void; onSend: (message: Omit<Message, 'id' | 'createdAt'>) => void }) { const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' }); const submit = (event: React.FormEvent) => { event.preventDefault(); if (form.name && form.email && form.message) void onSend(form) }; return <div className="modal-backdrop"><div className="modal-card form-card"><div className="modal-header"><h3>Fale conosco</h3><button className="close-button" onClick={onClose}>✕</button></div><form onSubmit={submit} className="cadastro-form"><Field label="Nome"><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></Field><Field label="E-mail"><input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></Field><Field label="Telefone (opcional)"><input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></Field><Field label="Mensagem"><textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} rows={4} /></Field><div className="modal-actions"><button className="primary-button">Enviar mensagem</button><button type="button" className="secondary-button" onClick={onClose}>Cancelar</button></div></form></div></div> }
export default App
