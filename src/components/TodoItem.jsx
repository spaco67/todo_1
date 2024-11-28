import { useState } from 'react'
import Modal from './Modal'

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex items-center gap-2 p-2 border-b">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4"
        />
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
        <button
          onClick={() => setShowModal(true)}
          className="px-2 py-1 text-red-600 hover:text-red-800"
        >
          ×
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          onDelete(todo.id)
          setShowModal(false)
        }}
        title="Delete Todo"
        message="Are you sure you want to delete this todo?"
      />
    </>
  )
}
