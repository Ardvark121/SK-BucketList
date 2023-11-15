export default function ContactPage() {
  return (
    <div class="card">
      <div class="card-header">
        <h2>Contact Me</h2>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <textarea class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <textarea class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
