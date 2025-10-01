"use client"
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface FAQItem { question: string; answer: string; isOpen?: boolean; }

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    { question: "Como posso agendar um atendimento?", answer: "Acesse a seção de agendamento no menu principal e siga as instruções.", isOpen: true },
    { question: "Como sei se a consulta foi marcada com sucesso?", answer: "Você receberá uma confirmação por email e SMS." },
    { question: "Posso remarcar ou cancelar minha consulta?", answer: "Sim, você pode remarcar ou cancelar sua consulta através do portal do paciente." },
    { question: "Quais documentos são necessários para o atendimento?", answer: "Leve um documento de identificação com foto e seu cartão do SUS." },
    { question: "Como funciona o teleatendimento?", answer: "O teleatendimento permite consultas online via vídeo chamada. Acesse a seção de teleatendimento para mais detalhes." },
    { question: "Preciso pagar para usar o aplicativo ou agendar consultas?", answer: "Não. O aplicativo é gratuito e os atendimentos seguem as regras do hospital. Você só precisa estar cadastrado." },
    { question: "O que faço se esquecer minha senha?", answer: "Use a opção 'Esqueci minha senha' na tela de login para redefini-la." },
    { question: "Como posso entrar em contato com o suporte?", answer: "Use a seção de contato no aplicativo ou ligue para o número do hospital." },
    { question: "Quais são os horários de atendimento?", answer: "Os horários variam conforme o serviço. Consulte a seção de horários no aplicativo." },
    { question: "O que fazer em caso de emergência?", answer: "Em caso de emergência, dirija-se ao pronto-socorro mais próximo ou ligue para o 192." },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }));
  };

  return (
    <main className="page-container">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button onClick={() => toggleFAQ(index)} className="faq-question-button">
              <div className="faq-question-content">
                <FaChevronRight className={`faq-icon ${faq.isOpen ? 'open' : ''}`} />
                <span className="faq-question-text">{faq.question}</span>
              </div>
            </button>
            {faq.isOpen && (
              <div className="faq-answer-wrapper"><p className="faq-answer-text">{faq.answer}</p></div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
export default FAQ;