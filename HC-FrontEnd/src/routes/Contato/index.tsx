"use client"
import type React from "react";
import { useState } from "react";
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main className="page-container">
      <div className={`notification-toast ${showNotification ? 'show' : ''}`}>
        <FaCheckCircle style={{ marginRight: '10px' }} /> Mensagem enviada com sucesso!
      </div>

      <div className="contato-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} required rows={6} className="form-textarea" />
          </div>
          <button type="submit" className="submit-button"><FaPaperPlane />Enviar</button>
        </form>

        <div className="contact-info-card">
          <div className="contact-info-item">
            <FaPhone /> 
            <div className="contact-info-content">
              <span className="contact-info-label">Tel.: </span>
              <span className="contact-info-value">(0xx11) 2661-0000</span>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <div className="contact-info-content">
              <span className="contact-info-label">Endereço:</span>
              <div className="contact-info-value">
                Av. Dr. Enéas de Carvalho Aguiar, 255 Cerqueira César 05403-000<br />São Paulo - Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contato;