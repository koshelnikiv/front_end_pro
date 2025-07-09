import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

const renderWithStore = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

// 1. Заголовок TODO (h2)
test('відображає заголовок TODO', () => {
  renderWithStore(<App />);
  const heading = screen.getByRole('heading', { name: /TODO/i });
  expect(heading.tagName).toBe('H2');
});

// 2. Поле вводу приймає текст і цифри
test('поле вводу приймає букви та цифри', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  await userEvent.type(input, 'Test123');
  expect(input).toHaveValue('Test123');
});

// 3. Не додає задачу, якщо введено менше 3 символів
test('не додає задачу при короткому тексті', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByRole('button', { name: /додати/i });

  await userEvent.type(input, 'Hi');
  await userEvent.click(addButton);

  const listItems = screen.queryAllByRole('listitem');
  expect(listItems.length).toBe(0);
});

// 4. Додає нову задачу
test('додає нову задачу у список', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByRole('button', { name: /додати/i });

  await userEvent.type(input, 'Нова задача');
  await userEvent.click(addButton);

  expect(await screen.findByText('Нова задача')).toBeInTheDocument();
});

// 5. Видаляє задачу зі списку
test('видаляє задачу зі списку', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByRole('button', { name: /додати/i });

  await userEvent.type(input, 'Видалити цю задачу');
  await userEvent.click(addButton);

  const deleteButton = await screen.findByRole('button', { name: /видалити/i });
  await userEvent.click(deleteButton);

  expect(screen.queryByText('Видалити цю задачу')).not.toBeInTheDocument();
});

// 6. Відмітка задачі як виконано (checkbox)
test('позначає задачу як виконану через чекбокс', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByRole('button', { name: /додати/i });

  await userEvent.type(input, 'Виконати задачу');
  await userEvent.click(addButton);

  const checkbox = await screen.findByRole('checkbox');
  expect(checkbox.checked).toBe(false);

  await userEvent.click(checkbox);
  expect(checkbox.checked).toBe(true);
});

// 7. Очистка всіх задач
test('очищає усі задачі', async () => {
  renderWithStore(<App />);
  const input = screen.getByPlaceholderText(/введіть задачу/i);
  const addButton = screen.getByRole('button', { name: /додати/i });

  await userEvent.type(input, 'Задача 1');
  await userEvent.click(addButton);
  await userEvent.type(input, 'Задача 2');
  await userEvent.click(addButton);

  expect(await screen.findByText('Задача 1')).toBeInTheDocument();
  expect(await screen.findByText('Задача 2')).toBeInTheDocument();

  const clearBtn = screen.getByRole('button', { name: /очистити все/i });
  await userEvent.click(clearBtn);

  expect(screen.queryByText('Задача 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Задача 2')).not.toBeInTheDocument();
});
