import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    Alert,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "./agendar-hora.css";

import HeroBanner from "../../../components/Hero/HeroBanner";
import fondo from "../../../assets/img/fondo/servicios/fondo_servicio.png";

// Simulación: usuario NO logueado
const usuarioAutenticado = false;

// Simulación: duración de cada servicio
const DURACIONES = {
    "limpieza-facial": 60,
    "descontracturante": 50,
    "manicure-spa": 45,
    "corte-profesional": 40,
    "maquillaje-social": 60,
    "botox-capilar": 90,
};

// Simulación: horas tomadas desde backend
const HORAS_OCUPADAS_MOCK = {
    "2025-01-15": ["10:00", "12:00"],
    "2025-01-20": ["09:00", "11:00", "13:00"],
};

export default function AgendarHora() {
    const [servicio, setServicio] = useState("");
    const [fecha, setFecha] = useState(new Date());
    const [horas, setHoras] = useState([]);
    const [horaSeleccionada, setHoraSeleccionada] = useState("");
    const [ocupadas, setOcupadas] = useState([]);

    const [modalLogin, setModalLogin] = useState(false);
    const [confirmacion, setConfirmacion] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Lista de servicios disponibles (para el menú lateral)
    const serviciosDisponibles = [
        { key: "limpieza-facial", label: "Limpieza Facial", dur: DURACIONES["limpieza-facial"] || 60 },
        { key: "descontracturante", label: "Masaje Descontracturante", dur: DURACIONES["descontracturante"] || 50 },
        { key: "manicure-spa", label: "Manicure Spa", dur: DURACIONES["manicure-spa"] || 45 },
        { key: "corte-profesional", label: "Corte Profesional", dur: DURACIONES["corte-profesional"] || 40 },
        { key: "maquillaje-social", label: "Maquillaje Profesional", dur: DURACIONES["maquillaje-social"] || 60 },
        { key: "botox-capilar", label: "Botox Capilar", dur: DURACIONES["botox-capilar"] || 90 },
    ];

    // Capturar servicio desde URL o seleccionar el primero por defecto
    useEffect(() => {
        const p = new URLSearchParams(location.search);
        const srv = p.get("servicio");
        const initial = srv || serviciosDisponibles[0].key;
        setServicio(initial);
        const dur = DURACIONES[initial] || 30;
        generarSlots(dur);
    }, [location]);

    // Genera bloques de horarios
    const generarSlots = (duracion) => {
        const inicio = 9 * 60;
        const fin = 19 * 60;
        const slots = [];

        for (let m = inicio; m + duracion <= fin; m += duracion) {
            const h = String(Math.floor(m / 60)).padStart(2, "0");
            const min = String(m % 60).padStart(2, "0");
            slots.push(`${h}:${min}`);
        }

        setHoras(slots);
    };

    // Cargar horas ocupadas simuladas
    useEffect(() => {
        const f = fecha.toISOString().split("T")[0];
        setOcupadas(HORAS_OCUPADAS_MOCK[f] || []);
    }, [fecha]);

    // Horas disponibles filtradas (no ocupadas)
    const horasDisponibles = horas.filter((h) => !ocupadas.includes(h));

    // Intento de reserva
    const reservar = () => {
        if (!usuarioAutenticado) {
            setModalLogin(true);
            return;
        }

        setConfirmacion({
            tipo: "success",
            mensaje:
                "Tu hora fue agendada correctamente. Te enviaremos un correo con la confirmación.",
        });

        setTimeout(() => navigate("/servicios"), 1800);
    };

    return (
        <>
            {/* HERO SUPERIOR */}
            <div className="page-hero">
                <HeroBanner
                    title="Agendar Hora"
                    subtitle="Selecciona tu fecha y horario disponible"
                    backgroundImage={fondo}
                    gradient="rgba(0,0,0,0.55)"
                    textGradient="linear-gradient(90deg, #ff8dcf, #b36bff)"
                />
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <Container className="agenda-wrapper">
                <Row className="justify-content-center">
                    <Col lg={10} className="agenda-card shadow-lg">

                        <h2 className="agenda-title">
                            Reserva – {servicio.replace("-", " ")}
                        </h2>

                        {confirmacion && (
                            <Alert variant="success" className="text-center">
                                {confirmacion.mensaje}
                            </Alert>
                        )}

                        {/* CALENDARIO */}
                        <Row>
                            <Col md={6} className="calendar-section">
                                <h5 className="section-title">Selecciona un día</h5>
                                <Calendar
                                    onChange={setFecha}
                                    value={fecha}
                                    minDate={new Date()}
                                    className="calendar-custom"
                                />

                                <h5 className="section-title mt-3">Horas disponibles</h5>
                                <Row>
                                    {horasDisponibles.length === 0 ? (
                                        <p className="text-muted">No hay horarios disponibles para este día.</p>
                                    ) : (
                                        horasDisponibles.map((h, i) => (
                                            <Col xs={6} md={4} className="mb-3" key={i}>
                                                <Button
                                                    onClick={() => setHoraSeleccionada(h)}
                                                    className={`hora-slot ${
                                                        horaSeleccionada === h ? "slot-active" : ""
                                                    }`}
                                                >
                                                    {h}
                                                </Button>
                                            </Col>
                                        ))
                                    )}
                                </Row>
                            </Col>

                            <Col md={6} className="servicios-menu">
                                <h5 className="section-title">Servicios</h5>
                                <div className="list-group">
                                    {serviciosDisponibles.map((s) => (
                                        <Button
                                            key={s.key}
                                            variant={servicio === s.key ? "primary" : "light"}
                                            className={`w-100 text-start mb-2 ${servicio === s.key ? "text-white" : ""}`}
                                            onClick={() => {
                                                setServicio(s.key);
                                                generarSlots(s.dur);
                                                setHoraSeleccionada("");
                                            }}
                                        >
                                            <strong>{s.label}</strong>
                                            <div className="small text-muted">Duración: {s.dur} min</div>
                                        </Button>
                                    ))}
                                </div>
                            </Col>
                        </Row>

                        {/* BOTÓN RESERVAR */}
                        <div className="text-center mt-4">
                            <Button
                                disabled={!horaSeleccionada}
                                className="btn-reservar"
                                onClick={reservar}
                            >
                                Confirmar reserva
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* MODAL LOGIN */}
            <Modal show={modalLogin} onHide={() => setModalLogin(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Debes iniciar sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Para agendar una hora debes iniciar sesión con tu cuenta.
                    Esto nos permite enviarte confirmaciones y recordatorios.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalLogin(false)}>
                        Cancelar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => navigate("/login")}
                    >
                        Iniciar sesión
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
