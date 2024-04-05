import {promises as fs} from 'fs';
import {Message, MessageWithOutId} from './types';

const filename = './db.json';
let data: Message[] = [];

const fileDB = {
  async init (){
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch  {
      data = [];
    }
  },
  async getItems () {
    return data;
  },
  async addItem (item: MessageWithOutId) {
    const message = {
      id: crypto.randomUUID(),
      ...item,
    }
    data.push({...message});
    await this.save();

    return message;
  },
  async save () {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDB;