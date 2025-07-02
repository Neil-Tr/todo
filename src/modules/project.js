class Project {
    constructor (name, desc, date) {
        this.id = Date.now();
        this.name = name;
        this.desc = desc;
        this.date = date;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItemList() {
        return [...this.items];
    }

    removeItem(index) {
        if (index >=0 && index < this.items.length) {
            this.items.splice(index,1);
        }
    }


    save() {
        localStorage.setItem(this.name, JSON.stringify({
            name: this.name,
            desc: this.desc,
            date: this.date,
            items: this.items,
        }))
    }

    static load(name) {
        const data = localStorage.getItem(name);
         if (data) {
            const parsed = JSON.parse(data);
            const project = new Project(parsed.name, parsed.desc, parsed.date);
            project.items = parsed.items;
            return project;
        }
        return null;
    }
}

export default Project;