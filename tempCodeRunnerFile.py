from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for session and flashing messages
CORS(app)  # Enable CORS for all routes

# Database connection function
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",  # Use the password for your database
        database="acrproj"  # Update this to your actual database name if needed
    )

# Route for login page
@app.route('/')
def index():
    return render_template('login.html')

# Route for handling login with role-based authentication
@app.route('/login', methods=['POST'])
def login():
    username = request.form['login-user']
    password = request.form['login-password']
    role = request.form['role']  # Get the role (student/admin) from form

    # Connect to the database and verify credentials based on role
    conn = get_db_connection()
    cursor = conn.cursor()

    if role == 'student':
        cursor.execute("SELECT * FROM credentials WHERE RegNo = %s AND Password = %s", (username, password))
        result = cursor.fetchone()
        if result:
            session['username'] = username  # Store username in session
            session['role'] = 'student'
            flash("Student login successful!", "success")
            return redirect(url_for('student'))
        else:
            flash("Invalid student credentials. Please try again.", "error")

    elif role == 'admin':
        cursor.execute("SELECT * FROM admin WHERE adminID = %s AND pwd = %s", (username, password))
        result = cursor.fetchone()
        if result:
            session['username'] = username  # Store username in session
            session['role'] = 'admin'
            flash("Admin login successful!", "success")
            return redirect(url_for('admin_home'))
        else:
            flash("Invalid admin credentials. Please try again.", "error")

    else:
        flash("Invalid role selected.", "error")

    cursor.close()
    conn.close()
    return redirect(url_for('index'))

# Route for student home page
@app.route('/student')
def student():
    username = session.get('username')
    if session.get('role') != 'student':
        flash("Access denied. Please log in as a student.", "error")
        return redirect(url_for('index'))

    # Fetch student data based on the username
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT Name, RollNo, CGPA, Sem, Branch FROM stdetails WHERE RollNo = %s", (username,))
    student_data = cursor.fetchone()
    cursor.close()
    conn.close()

    if student_data:
        return render_template('Student_Home_index.html', student_data=student_data)
    else:
        flash("No student data found.", "error")
        return redirect(url_for('student'))

# Route for admin home page
@app.route('/admin_home')
def admin_home():
    if session.get('role') != 'admin':
        flash("Access denied. Please log in as an admin.", "error")
        return redirect(url_for('index'))

    # Retrieve admin details using the stored adminID
    admin_id = session.get('username')
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT Name, empID FROM adetails WHERE empID = %s", (admin_id,))
    admin_data = cursor.fetchone()
    cursor.close()
    conn.close()

    if admin_data:
        return render_template('Admin_Home_index.html', admin_data=admin_data)
    else:
        flash("No admin data found.", "error")
        return redirect(url_for('index'))

# All other routes remain the same...
# Route to retrieve courses for Re-Registration (RR)
@app.route('/get-courses_RR', methods=['GET'])
def get_courses_RR():
    semester = request.args.get('semester')
    if not semester:
        return jsonify({'error': 'Semester parameter is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT DISTINCT Cname FROM sub_RR WHERE sem = %s;", (semester,))
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)


# Route to add selected courses for Re-Registration (RR)
@app.route('/add-selected-courses_RR', methods=['POST'])
def add_selected_courses_RR():
    data = request.json
    semester = int(data.get('semester'))
    courses = data.get('courses')

    if not semester or not courses:
        return jsonify({'error': 'Semester or courses data is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Clear existing records for the semester in selected_courses_RR
    try:
        cursor.execute("DELETE FROM selected_courses_RR WHERE semester = %s", (semester,))
        conn.commit()

        # Insert new selected courses
        query = "INSERT INTO selected_courses_RR (semester, course_name) VALUES (%s, %s)"
        for course in courses:
            cursor.execute(query, (semester, course))
        conn.commit()

    except mysql.connector.Error as err:
        print("Error inserting courses:", err)
        return jsonify({'status': 'Failed to add courses'}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({'status': 'Courses added successfully'})

# Route to retrieve courses for Additional Slot (AS)
@app.route('/get-courses_AS', methods=['GET'])
def get_courses_AS():
    semester = request.args.get('semester')
    if not semester:
        return jsonify({'error': 'Semester parameter is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT DISTINCT Cname FROM sub_AS WHERE sem = %s;", (semester,))
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

# Route to add selected courses for Additional Slot (AS)
@app.route('/add-selected-courses_AS', methods=['POST'])
def add_selected_courses_AS():
    data = request.json
    semester = int(data.get('semester'))
    courses = data.get('courses')

    if not semester or not courses:
        return jsonify({'error': 'Semester or courses data is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Clear existing records for the semester in selected_courses_AS
    try:
        cursor.execute("DELETE FROM selected_courses_AS WHERE semester = %s", (semester,))
        conn.commit()

        # Insert new selected courses
        query = "INSERT INTO selected_courses_AS (semester, course_name) VALUES (%s, %s)"
        for course in courses:
            cursor.execute(query, (semester, course))
        conn.commit()

    except mysql.connector.Error as err:
        print("Error inserting courses:", err)
        return jsonify({'status': 'Failed to add courses'}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({'status': 'Courses added successfully'})

# Route to retrieve courses for Contact Course (CC)
@app.route('/get-courses_CC', methods=['GET'])
def get_courses_CC():
    semester = request.args.get('semester')
    if not semester:
        return jsonify({'error': 'Semester parameter is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT DISTINCT Cname FROM sub_CC WHERE sem = %s;", (semester,))
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

# Route to add selected courses for Contact Course (CC)
@app.route('/add-selected-courses_CC', methods=['POST'])
def add_selected_courses_CC():
    data = request.json
    semester = int(data.get('semester'))
    courses = data.get('courses')

    if not semester or not courses:
        return jsonify({'error': 'Semester or courses data is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Clear existing records for the semester in selected_courses_CC
    try:
        cursor.execute("DELETE FROM selected_courses_CC WHERE semester = %s", (semester,))
        conn.commit()

        # Insert new selected courses
        query = "INSERT INTO selected_courses_CC (semester, course_name) VALUES (%s, %s)"
        for course in courses:
            cursor.execute(query, (semester, course))
        conn.commit()

    except mysql.connector.Error as err:
        print("Error inserting courses:", err)
        return jsonify({'status': 'Failed to add courses'}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({'status': 'Courses added successfully'})

# Route to retrieve courses for Supply (S)
@app.route('/get-courses_S', methods=['GET'])
def get_courses_S():
    semester = request.args.get('semester')
    if not semester:
        return jsonify({'error': 'Semester parameter is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT DISTINCT Cname FROM sub_S WHERE sem = %s;", (semester,))
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

# Route to add selected courses for Supply (S)
@app.route('/add-selected-courses_S', methods=['POST'])
def add_selected_courses_S():
    data = request.json
    semester = int(data.get('semester'))
    courses = data.get('courses')

    if not semester or not courses:
        return jsonify({'error': 'Semester or courses data is missing'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    # Clear existing records for the semester in selected_courses_S
    try:
        cursor.execute("DELETE FROM selected_courses_S WHERE semester = %s", (semester,))
        conn.commit()

        # Insert new selected courses
        query = "INSERT INTO selected_courses_S (semester, course_name) VALUES (%s, %s)"
        for course in courses:
            cursor.execute(query, (semester, course))
        conn.commit()

    except mysql.connector.Error as err:
        print("Error inserting courses:", err)
        return jsonify({'status': 'Failed to add courses'}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({'status': 'Courses added successfully'})

# Route for the Admin Re-Registration page
@app.route('/admin_re_registration')
def admin_re_registration():
    return render_template('Admin_ReRegistration.html')

# Route for the Admin Additional Slot page
@app.route('/admin_additional_slot')
def admin_additional_slot():
    return render_template('AdditionalSlot.html')

# Route for the Admin Supply page
@app.route('/admin_supply')
def admin_supply():
    return render_template('Admin_Supply.html')

# Route for the Admin Contact Course page
@app.route('/admin_contact_course')
def admin_contact_course():
    return render_template('Admin_ContactCourse.html')

# Route for Logout (if you want it to go back to login page or handle logout)
@app.route('/logout')
def logout():
    session.clear()  # Clear session data to log out
    return redirect(url_for('index'))




if __name__ == '__main__':
    app.run(debug=True)
