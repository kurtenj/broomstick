# Product Requirements Document (PRD) for Broomstick

## Overview
Broomstick is a simple web application that enables users (e.g., product managers) to create temporary feedback documents (called "Sweeps") for developers. Each Sweep contains a todo list where items can include text descriptions and optional screenshots pasted from the system clipboard. Screenshots are displayed inline as small thumbnails and can be enlarged when clicked. Developers can view the todo list, inspect screenshots, and mark items as complete. The app leverages real-time updates for collaboration and uses temporary storage to manage data efficiently.

## Objectives
- Provide an intuitive tool for capturing feedback with text and screenshots.
- Enable developers to review feedback and mark tasks as complete.
- Ensure the app is lightweight, temporary, and easy to share.
- Build a responsive and visually appealing UI using shadcn and Tailwind CSS.

## Key Features

### Create Sweep
- Users can create a new Sweep, generating a unique ID and URL for sharing.

### Add Todo Items
- Users can add checklist items to the todo list with text descriptions.
- Option to add items with or without screenshots.

### Attach Screenshots
- Users can paste screenshots from their system clipboard.
- Screenshots are attached to a new todo item and displayed as small inline thumbnails (e.g., 50px wide).
- Clicking a thumbnail opens a modal with the full-sized image.
- Supported formats include PNG, JPEG, and GIF to ensure cross-platform compatibility between Windows and Mac.
- Maximum file size: 5MB per screenshot to maintain performance.

### View and Mark Complete
- Todo items display a checkbox, text description, and thumbnail (if a screenshot is attached).
- Users (including developers) can mark items as complete by checking the checkbox.
- Full screenshots are viewable via a modal triggered by clicking the thumbnail.

### Real-Time Updates
- Changes to the todo list (e.g., adding items, marking complete) are reflected in real-time for all users viewing the Sweep.

### Temporary Storage
- Sweeps are stored temporarily, accessible via a unique URL.
- Data persists for 3 days, after which the Sweep and all associated screenshots are automatically deleted.
- Users can extend the lifetime of a Sweep by clicking an "Extend" button that adds 3 more days to the expiration date.

## User Flow

### Creating a Sweep
1. User visits the home page and clicks "Create New Sweep."
2. A new Sweep is created with a unique ID, and the user is redirected to `/sweep/{id}`.

### Adding Todo Items
1. On the Sweep page, the user types a description in an input field and presses Enter or clicks "Add" to create a text-only todo item.
2. To add an item with a screenshot, the user pastes an image from their clipboard, triggering the creation of a new todo item with the screenshot attached. The text input for this item is then editable.

### Viewing and Interacting
1. The todo list displays each item with a checkbox, text description, and thumbnail (if applicable).
2. Clicking a thumbnail opens a modal showing the full screenshot.
3. Users check the checkbox to mark an item as complete.

### Sharing
- Users copy the Sweep URL (e.g., `https://broomstick.app/sweep/{id}`) to share with developers or other collaborators.

### Extending Sweep Lifetime
- Users can click an "Extend" button on the Sweep page to add 3 more days to the expiration date.
- A countdown timer shows days remaining until expiration.

## Technical Requirements

### Frontend:
- Built with React for dynamic UI rendering.
- Uses shadcn components (e.g., Checkbox, Input, Button, Modal) for reusable UI elements.
- Styled with Tailwind CSS for responsive and customizable design.
- Optional: Use Next.js for easier routing and deployment, though a basic React app is sufficient.
- Optimized for desktop performance (no mobile optimization required).

### Backend:
- Firebase Firestore for storing Sweep data with real-time updates.
- Firebase Storage for uploading and retrieving screenshots.
- Automatic deletion of Sweeps and associated screenshots after 3 days.
- Error handling for failed uploads with appropriate user feedback.

### Deployment:
- Frontend deployed to Vercel or Netlify.
- Firebase handles backend storage and real-time functionality.

### Performance Optimization:
- Image compression before upload to reduce storage and bandwidth usage.
- Lazy loading of screenshots to improve initial page load time.
- Pagination if a Sweep contains more than 20 todo items.

## Data Model

### Sweep:
- `id`: string (auto-generated by Firestore)
- `createdAt`: timestamp
- `expiresAt`: timestamp (createdAt + 3 days)
- `title`: string (optional)
- `todos`: array of TodoItem objects

### TodoItem:
- `text`: string (description of the task)
- `completed`: boolean (default: false)
- `screenshotUrl`: string (URL to the screenshot in Firebase Storage, optional)
- `createdAt`: timestamp

## UI Components

### HomePage
- Button: "Create New Sweep" (generates a new Sweep and redirects).
- Optional input: Enter an existing Sweep ID to view it (future enhancement).

### SweepPage
- Displays the todo list and handles screenshot pasting.
- Includes a "Copy Link" button to share the URL.
- Shows expiration countdown and "Extend" button.
- Error messages for failed uploads or other errors.

### TodoList
- Renders a list of TodoItem components.
- Includes an input field and "Add" button for text-only items.

### TodoItem
- Checkbox: Toggle completed status.
- Input field: Editable text description.
- Thumbnail: Displays screenshot (if present) with max-width: 50px.
- Updates Firestore on checkbox change or text edit.

### ScreenshotModal
- Displays the full screenshot when a thumbnail is clicked.

## Implementation Details

### Screenshot Pasting:
- Use the `onPaste` event or `navigator.clipboard` API to detect image data from the clipboard.
- Support both Windows and Mac clipboard formats.
- Compress images before upload to maintain performance.
- Upload the image to Firebase Storage, retrieve the download URL, and add a new todo item with this URL.
- Show loading indicator during upload process.
- Display error message if upload fails.

### Real-Time Updates:
- Subscribe to Firestore document changes using `onSnapshot` to reflect updates instantly.

### Styling:
- Use Tailwind classes (e.g., `flex`, `gap-2`, `border`, `p-2`) for layout and spacing.
- Leverage shadcn's pre-built components for a polished look.

### Error Handling:
- Clear error messages for failed uploads or connectivity issues.
- Retry mechanism for failed operations.
- Graceful degradation when Firebase services are unavailable.

## Testing Strategy
- Rapid iteration with frequent user testing.
- Focus on core functionality first (creating Sweeps, adding todos, attaching screenshots).
- Implement basic error handling and then refine based on user feedback.
- Test cross-platform clipboard functionality between Windows and Mac.

## Assumptions
- No authentication is required; access is controlled by knowing the Sweep URL.
- All users with the link can edit the Sweep (add items, mark complete).
- Screenshots are limited to one per todo item for simplicity.
- Desktop-only experience; no mobile optimization needed.

## Future Enhancements
- Add authentication to restrict Sweep access.
- Allow multiple screenshots per todo item.
- Add a "Delete Sweep" button.
- Implement sorting and filtering options for todo items.