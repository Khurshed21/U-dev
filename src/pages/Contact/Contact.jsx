import React from 'react'
import Animation from '../../components/Animation/Animation'

const Contact = () => {
  return (
    <div className='bg-black h-fit relative z-10 font-montserrat pt-10 w-full text-white'>

        <Animation />

            <div className="flex items-center justify-center min-h-screen ">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Свяжитесь с нами</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Введите ваше имя"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contact" className="block text-gray-700 text-sm font-medium mb-2">
            Контакты
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Введите ваш номер телефона или email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contact" className="block text-gray-700 text-sm font-medium mb-2">
            Сообщение
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Введите сообщение"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Отправить
        </button>
      </form>
    </div> 
    </div>
  )
}

export default Contact